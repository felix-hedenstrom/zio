"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5601],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8943:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={id:"zio-prelude",title:"ZIO Prelude"},s=void 0,p={unversionedId:"resources/ecosystem/officials/zio-prelude",id:"resources/ecosystem/officials/zio-prelude",isDocsHomePage:!1,title:"ZIO Prelude",description:"ZIO Prelude is a lightweight, distinctly Scala take on functional abstractions, with tight ZIO integration.",source:"@site/docs/resources/ecosystem/officials/zio-prelude.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-prelude",permalink:"/resources/ecosystem/officials/zio-prelude",tags:[],version:"current",frontMatter:{id:"zio-prelude",title:"ZIO Prelude"},sidebar:"resources-sidebar",previous:{title:"ZIO Optics",permalink:"/resources/ecosystem/officials/zio-optics"},next:{title:"ZIO Process",permalink:"/resources/ecosystem/officials/zio-process"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],u={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-prelude"},"ZIO Prelude")," is a lightweight, distinctly Scala take on ",(0,o.kt)("strong",{parentName:"p"},"functional abstractions"),", with tight ZIO integration."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"ZIO Prelude is a small library that brings common, useful algebraic abstractions and data types to scala developers."),(0,o.kt)("p",null,"It is an alternative to libraries like ",(0,o.kt)("em",{parentName:"p"},"Scalaz")," and ",(0,o.kt)("em",{parentName:"p"},"Cats")," based on radical ideas that embrace ",(0,o.kt)("strong",{parentName:"p"},"modularity")," and ",(0,o.kt)("strong",{parentName:"p"},"subtyping")," in Scala and offer ",(0,o.kt)("strong",{parentName:"p"},"new levels of power and ergonomics"),". It throws out the classic functor hierarchy in favor of a modular algebraic approach that is smaller, easier to understand and teach, and more expressive."),(0,o.kt)("p",null,"Design principles behind ZIO Prelude:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Radical")," \u2014 So basically it ignores all dogma and it is completely written with a new mindset."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Orthogonality")," \u2014 The goal for ZIO Prelude is to have no overlap. Type classes should do one thing and fit it well. So there is not any duplication to describe type classes."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Principled")," \u2014 All type classes in ZIO Prelude include a set of laws that instances must obey."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pragmatic")," \u2014 If we have data types that don't satisfy laws but that are still useful to use in most cases, we can go ahead and provide instances for them."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Scala-First")," - It embraces subtyping and benefit from object-oriented features of Scala.")),(0,o.kt)("p",null,"ZIO Prelude gives us:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Types")," that complements the Scala Standard Library:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NonEmptyList"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NonEmptySet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZSet"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ZNonEmptySet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Validation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZPure")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type Classes")," to describe similarities across different types to eliminate duplications and boilerplates:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Business entities (",(0,o.kt)("inlineCode",{parentName:"li"},"Person"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ShoppingCart"),", etc.)"),(0,o.kt)("li",{parentName:"ul"},"Effect-like structures (",(0,o.kt)("inlineCode",{parentName:"li"},"Try"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Option"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Future"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Either"),", etc.)"),(0,o.kt)("li",{parentName:"ul"},"Collection-like structures (",(0,o.kt)("inlineCode",{parentName:"li"},"List"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Tree"),", etc.)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"New Types")," that allow to ",(0,o.kt)("em",{parentName:"li"},"increase type safety")," in domain modeling. Wrapping existing type adding no runtime overhead.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-prelude" % "1.0.0-RC5"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, we are going to create a simple voting application. We will use two features of ZIO Prelude:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To become more type safety we are going to use ",(0,o.kt)("em",{parentName:"li"},"New Types")," and introducing ",(0,o.kt)("inlineCode",{parentName:"li"},"Topic")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Votes")," data types."),(0,o.kt)("li",{parentName:"ol"},"Providing instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"Associative")," type class for ",(0,o.kt)("inlineCode",{parentName:"li"},"Votes")," data type which helps us to combine ",(0,o.kt)("inlineCode",{parentName:"li"},"Votes")," values.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.prelude._\n\nobject VotingExample extends scala.App {\n\n  object Votes extends Subtype[Int] {\n    implicit val associativeVotes: Associative[Votes] =\n      new Associative[Votes] {\n        override def combine(l: => Votes, r: => Votes): Votes =\n          Votes(l + r)\n      }\n  }\n  type Votes = Votes.Type\n\n  object Topic extends Subtype[String]\n  type Topic = Topic.Type\n\n  final case class VoteState(map: Map[Topic, Votes]) { self =>\n    def combine(that: VoteState): VoteState =\n      VoteState(self.map combine that.map)\n  }\n\n  val zioHttp    = Topic("zio-http")\n  val uziHttp    = Topic("uzi-http")\n  val zioTlsHttp = Topic("zio-tls-http")\n\n  val leftVotes  = VoteState(Map(zioHttp -> Votes(4), uziHttp -> Votes(2)))\n  val rightVotes = VoteState(Map(zioHttp -> Votes(2), zioTlsHttp -> Votes(2)))\n\n  println(leftVotes combine rightVotes)\n  // Output: VoteState(Map(zio-http -> 6, uzi-http -> 2, zio-tls-http -> 2))\n}\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OwmHgL9F_9Q"},"SF Scala: Reimagining Functional Type Classes")," John A. De Goes and Adam Fraser (August 2020) \u2014 In this presentation, John A. De Goes and Adam Fraser introduce a new Scala library with a completely different factoring of functional type classes\u2014one which throws literally everything away and starts from a clean slate. In this new factoring, type classes leverage Scala\u2019s strengths, including variance and modularity. Pieces fit together cleanly and uniformly, and in a way that satisfies existing use cases, but enables new ones never before possible. Finally, type classes are named, organized, and described in a way that makes teaching them easier, without compromising on algebraic principles."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Sinde_P7nmY"},"The Terror-Free Guide To Introducing Functional Scala At Work")," by Jorge Vasquez (December 2020) \u2014 Too often, our applications are dominated by boilerplate that's not fun to write or test, and that makes our business logic complicated. In object-oriented programming, classes and interfaces help us with abstraction to reduce boilerplate. But, in functional programming, we use type classes. Historically, type classes in functional programming have been very complex and confusing, partially because they import ideas from Haskell that don't make sense in Scala, and partially because of their esoteric origins in category theory. In this presentation, Jorge V\xe1squez presents a new library called ZIO Prelude, which offers a distinctly Scala take on Functional Abstractions, and you will learn how you can eliminate common types of boilerplate by using it. Come see how you can improve your happiness and productivity with a new take on what it means to do functional programming in Scala!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=69ngoqVXKPI"},"ZIO WORLD - ZIO Prelude")," by Jorge Vasquez (March 2020) \u2014 In this talk, Jorge Vasques discusses his work bringing refined newtypes to ZIO Prelude, which are working natively on Scala 3 with a beautiful syntax and DSL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=M3HmROwOoRU"},"Zymposium - ZIO Prelude")," by Adam Fraser and Kit Langton (May 2021) \u2014 We'll see how ZIO Prelude gives us the tools for solving some common problems in day-to-day development. We'll also see how ZIO Prelude provides a set of abstractions we can use for inspiration when implementing our own data types but never forces us to use these abstractions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=97Yc0Ub9aZ8"},"Zymposium - Prelude Redux (Type-classes without Type-classes)")," by Adam and Kit Langton (May 2021) \u2014 We will see how thinking in terms of producers and consumers of values can give us powerful insights into the structure of our programs and how we can use these to develop composable operators for own data types, regardless of whether or not we choose to depend on a library like ZIO Prelude.")))}m.isMDXComponent=!0}}]);