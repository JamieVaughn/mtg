# MTG Booster Pack Showcase

### Experiments with various modern, lightweight templating libraries to render Magic the Gathering cards

This project was something I've been wanting to do as a way to take inventory on the best lightweight web templating tools out there
right now. So I'm ignoring the larger frameworks like React, Vue, Angular and others which require a build steop. For this I'm considering small, client-side packages that are only concerned with templating and hydrating the DOM with data. As late as 2019 I used Handlebars when I was creating a customer support application embedded in Zendesk that with a search input would simply GET customer data from a database for the agents' reference while fielding support calls. There were a few buttons that could POST updates to the customer profile as well. It worked fine, but I regretted the Handlebars choice somewhat as I later learned about the full spectrum of possible templating tools that were out there that would have been a better fit for that task... and in a smaller bundle size to boot. 

Lit-HTML was among the first to catch my eye, but many other small view/template libraries soon followed. I concocted a small templating task of rendering a Magic: The Gathering Booster card pack as a way to run each of these libraries through its paces. So with one css style sheet I can try out each view library purely for its templating chops. Here are the contenders:

#### Lightweight templating libraries demonstrated here so far:
* Lit-HTML (demo)[https://wjv.io/mtg/lit-html]
* Lit-Element (demo)[https://wjv.io/mtg/lit-element]
* Preact (demo)[https://wjv.io/mtg/preact]



#### My Opinion on each library for small scale data templating purposes
 
| Library       | Rating       | Size (unpacked) | Pros    | Cons    |
| :-----------: |:------------ | :-----: | :-----: | :-----: |
| Handlebars*   | ⭐⭐        | 2.2MB | HTML Templates | Heaviest Restricted Template Logic, No JSX, No Shadow DOM |
| Lit HTMl      | ⭐⭐⭐      | 519kB | Functional Style & Composability, JS-in-template        | HTML strings, No Shadow DOM |
| Lit Element   | ⭐⭐⭐⭐    | 222kB | Shadow DOM, Class Encapsulation, JS-in-template, Lightest | Verbose Syntax, HTML Strings |
| Preact        | ⭐⭐⭐⭐⭐  | 704kB | JSX, Functional Style, Composibility, JS-in-template    | No Shadow DOM |

###### *Handlebars not demonstrated here, but rating is based on prior experience in professional project

# API used for data for this templating experiment
* https://docs.magicthegathering.io/#documentationgetting_started

## Other APIs to incorporate:
* https://mtgjson.com/#how-it-works
* https://scryfall.com/