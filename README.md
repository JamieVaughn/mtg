# MTG Booster Pack Showcase

## Experiments with various modern, lightweight, templating libraries to render Magic the Gathering cards

This project is a way to take inventory of the best, lightweight, web templating tools available today. I'm ignoring the larger frameworks like React, Vue, Angular. I'm only considering small (<1.4MB), client-side packages that are concerned with templating and hydrating the DOM with data and have a minimal event handling integration. I also avoided libraries with any kind of build step or compilation step (Some of these could use babel + JSX, but I didn't use that for this project).

In 2018 - 2019, I used Handlebars to create a customer support application embedded in Zendesk that accepted a search query and would GET customer profiles from a database as a reference for an agent fielding support calls. Some buttons could POST small updates to the customer profile as well. It worked fine, but I soon regretted the Handlebars choice as I learned about the emerging templating tools building on the tagged template string concept that would have been a better fit for the task... and in a smaller bundle size to boot! 

Lit-HTML was among the first of this class of compact templating libraries to catch my eye, but many other such libraries soon followed. I devised a small templating task of rendering a _Magic: The Gathering_ card booster pack as a way to run each of these libraries through its paces. So with one css style sheet I can try out each view library purely for its templating chops. Here are the contenders<sup>†</sup>:

### Lightweight templating libraries demonstrated here so far:
* Lit-HTML [demo](https://wjv.io/mtg/lit-html) 
* Lit-Element [demo](https://wjv.io/mtg/lit-element) (with double-click lightbox feature)
* Preact [demo](https://wjv.io/mtg/preact)
* HauntedJS [demo](https://wjv.io/mtg/haunted)
* SlimJS [demo](https://wjv.io/mtg/slim) (Not all features implemented)
* SolidJS [demo](https://wjv.io/mtg/solid) (Only returns raw JSON so far)
* KnockoutJS [demo](https://wjv.io/mtg/knockout) (The OG framework that started it all in 2010)
* In progress:

* Brahmos [demo](https://wjv.io/mtg/brahmos) https://github.com/brahmosjs/brahmos https://codesandbox.io/s/brahmos-demo-3t8r6?file=/src/concurrent-mode/index.js
* AppRun [demo](https://wjv.io/mtg/apprun) https://github.com/yysun/apprun
* Cycle [demo](https://wjv.io/mtg/cycle) https://cycle.js.org/
* [Stimulus](https://stimulusjs.org/)
* Inferno [demo](https://wjv.io/mtg/inferno)
* [Ottavino](https://github.com/betterthancode/ottavino) https://webcomponents.dev/edit/RA7SjhwlA7S18lZy9kkL
* [Neow](https://github.com/neo-web/neow) https://webcomponents.dev/edit/fEa6HG5aeEwJ75vqDVyj


### My opinion on each library for small scale data templating purposes:
 
| Library       | Rating| Size (unpacked) | Size<sup>‡</sup> (min+gzipped)| Pros | Cons    |
| :-----------: |:------|:-----:| :---: | :-----:        | :-----: |
| Handlebars*   | ★☆☆☆☆ | 2.2MB | 21.7kB | Template bindings | Heavily Restricted Template Logic, DSL***, No Shadow DOM or Modules |
| Lit HTMl      | ★★★☆☆ | 519kB | 3.5kB | Flexible, Composability, Modules | HTML strings, No Shadow DOM |
| Lit Element   | ★★★★☆ | 222kB | 6.9kB | Web Components**, Stateful | Verbose Syntax, HTML Strings |
| Preact        | ★★★★★ | 704kB | 4kB | Composibility, Hooks, componentDidCatch, createContext | No Shadow DOM, Dependency: htm-lib |
| HauntedJS     | ★★★★★ | 74.6kB + 519kB | 5.4kB | "Hooks for Web Components" | Lacks Custom Methods, Manual Props, Dependency: Lit-HTML |
| AppRun        | ★★★★☆ | 586kB | 4.5kB | Pub-Sub/Elm architecture, custom events/routing/testing included, Web Components, CLI tooling, progressive enhancement (JSX, redux, typescript, dev tooling) | Hard to google for help/answers |
| SolidJS       | ★★★★☆ | 21.1kB | 7.3kB | Hooks, no V-DOM, Declarative, small/fast, typescript, Web components| Proxy Shenanigans, small community |
| SlimJS        | ★★☆☆☆ | 5kB   | 2.7kB | Web Components, Minimalist | Difficult to use, Documentation is lacking, No Functional Components, DSL***: Conditional logic, Binding syntax |
| KnockoutJS        | ★★☆☆☆ | 66kB   | 23.7kB | Historically Interesting (c.2010), Started the trend with Observables | Showing its age, No more updates |
| In progress:       |  |  |  |  |  |
| StimulusJS       | ★★★☆☆? | 1.3MB | 4.6kB | FRP****| |
| CycleJS       | ★★★☆☆? | 1.3MB | 4.6kB | FRP****| |
| Inferno       | ★★★☆☆? | 672kB | 20kB |  |  |
| AlpineJS       | ★★★☆☆? |  |  | Closest to VanillaJS| |
| Neow       | ★★★☆☆? | 4.2kB | 1.9kB | Tiny, Declarative, Web Components | |
| Ottavino      | ★★★☆☆? |  4kB | 1.8kB | As small as it gets, Object Constructor, Web components| |


###### <sup>†</sup> These appealing libraries were also considered, but were over the size limit: [RiotJS](https://www.npmjs.com/package/riot), Marko, SkateJS
###### <sup>‡</sup> Unpacked sizes were from listing on npm.org and min+gzipped sizes were from https://cost-of-modules.herokuapp.com/
###### *Handlebars is not demonstrated here as it does not qualify with 1.4MB size limit, but its rating is based on prior experience in a professional project and is included for comparison purposes since comparing to it was the motivation for this project.
###### **Web Components means this library is compliant with Web Component Specification including: Custom Elements, Shadow DOM, ES Modules, and HTML Template Element
###### ***DSL -> Domain Specific Language
###### ****FRP -> Functional Reactive Programming


#### I did not anticipate when embarking on this, how interesting and difficult of a challenge it is in rendering libraries to strike a balance between relying on the native browser/DOM APIs, which saves kBs, and/or implementing new rendering paradigms (Functional Reactive, Declarative Style, Hooks, State), which costs additional kBs and sometimes requires compilers.

### A screenshot of the benchmark App:
![App Screenshot](/img/demo.png)

Some feature highlights:
* Data fetching, hydrating, loading spinner, error handling
* Event handling:
    * Mouseover flip animation 
    * Click h1 to fetch new pack
* Render Mana Icons Component: 
    * Tested limits of templating logic capabilities 
    * Showed ease of component reusability/composability in Header & Card Text
    * No support for [Hybrid Mana](https://mtg.gamepedia.com/Hybrid_mana) types yet, so some mana costs are rendered with chars and slashes (i.e. B/R, G/U, W/B, etc.)

## API used for data for this templating experiment
* https://docs.magicthegathering.io/#documentationgetting_started

### Other APIs to incorporate:
* https://mtgjson.com/#how-it-works
* https://scryfall.com/