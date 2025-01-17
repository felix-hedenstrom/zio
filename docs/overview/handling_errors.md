---
id: overview_handling_errors
title:  "Handling Errors"
---

This section looks at some common ways to detect and respond to failures.

```scala mdoc:invisible
import zio._
```

## Either

You can surface failures with `ZIO#either`, which takes a `ZIO[R, E, A]` and produces a `ZIO[R, Nothing, Either[E, A]]`.

```scala mdoc:silent
val zeither: UIO[Either[String, Int]] = 
  ZIO.fail("Uh oh!").either
```

You can submerge failures with `ZIO.absolve`, which is the opposite of `either` and turns a `ZIO[R, Nothing, Either[E, A]]` into a `ZIO[R, E, A]`:

```scala mdoc:silent
def sqrt(io: UIO[Double]): IO[String, Double] =
  ZIO.absolve(
    io.map(value =>
      if (value < 0.0) Left("Value must be >= 0.0")
      else Right(Math.sqrt(value))
    )
  )
```

## Catching All Errors

If you want to catch and recover from all types of errors and effectfully attempt recovery, you can use the `catchAll` method:

```scala mdoc:invisible
import java.io.{ FileNotFoundException, IOException }

def openFile(s: String): IO[IOException, Array[Byte]] = 
  ZIO.attempt(???).refineToOrDie[IOException]
```

```scala mdoc:silent
val z: IO[IOException, Array[Byte]] = 
  openFile("primary.json").catchAll(_ => 
    openFile("backup.json"))
```

In the callback passed to `catchAll`, you may return an effect with a different error type (or perhaps `Nothing`), which will be reflected in the type of effect returned by `catchAll`.

## Catching Some Errors

If you want to catch and recover from only some types of exceptions and effectfully attempt recovery, you can use the `catchSome` method:

```scala mdoc:silent
val data: IO[IOException, Array[Byte]] = 
  openFile("primary.data").catchSome {
    case _ : FileNotFoundException => 
      openFile("backup.data")
  }
```

Unlike `catchAll`, `catchSome` cannot reduce or eliminate the error type, although it can widen the error type to a broader class of errors.

## Fallback

You can try one effect or if it fails, try another effect with the `orElse` combinator:

```scala mdoc:silent
val primaryOrBackupData: IO[IOException, Array[Byte]] = 
  openFile("primary.data").orElse(openFile("backup.data"))
```

## Folding

Scala's `Option` and `Either` data types have a `fold` method, which let you handle both the failure and the success at the same time. In a similar fashion, `ZIO` effects also have several methods that allow you to handle both failures and successes.

The first fold method, `fold`, lets you non-effectfully handle both a failure and a success by supplying a non-effectful handler for each case:

```scala mdoc:silent
lazy val DefaultData: Array[Byte] = Array(0, 0)

val primaryOrDefaultData: UIO[Array[Byte]] = 
  openFile("primary.data").fold(
    _    => DefaultData,
    data => data)
```

The second fold method, `foldZIO`, lets you effectfully handle both a failure and a success by supplying an effectful (but still pure) handler for each case:

```scala mdoc:silent
val primaryOrSecondaryData: IO[IOException, Array[Byte]] = 
  openFile("primary.data").foldZIO(
    _    => openFile("secondary.data"),
    data => ZIO.succeed(data))
```

Nearly all error handling methods are defined in terms of `foldZIO` because it is both powerful and fast.

In the following example, `foldZIO` is used to handle both the failure and the success of the `readUrls` method:

```scala mdoc:invisible
sealed trait Content

object Content {
  case class NoContent(t: Throwable) extends Content
  case class OkContent(s: String)    extends Content
}

def readUrls(file: String): Task[List[String]]     = ZIO.succeed("Hello" :: Nil)
def fetchContent(urls: List[String]): UIO[Content] = ZIO.succeed(Content.OkContent("Roger"))
```
```scala mdoc:silent
val urls: UIO[Content] =
  readUrls("urls.json").foldZIO(
    error   => ZIO.succeed(Content.NoContent(error)), 
    success => fetchContent(success)
  )
```

## Retrying

There are a number of useful methods on the ZIO data type for retrying failed effects. 

The most basic of these is `ZIO#retry`, which takes a `Schedule` and returns a new effect that will retry the first effect if it fails, according to the specified policy:

```scala mdoc:silent
val retriedOpenFile: ZIO[Clock, IOException, Array[Byte]] = 
  openFile("primary.data")
      .retry(Schedule.recurs(5))
```

The next most powerful function is `ZIO#retryOrElse`, which allows specification of a fallback to use if the effect does not succeed with the specified policy:

```scala
val retryOpenFile: ZIO[Clock, IOException, DefaultData) = 
  openFile("primary.data")
      .retryOrElse(Schedule.recurs(5), (_, _) => ZIO.succeed(DefaultData))
```

For more information on how to build schedules, see the documentation on [Schedule](../datatypes/misc/schedule.md).

## Next Steps

If you are comfortable with basic error handling, the next step is to learn about safe [resource handling](handling_resources.md).
