```
npx create-next-app my-next-app
```

### Linking 

```
import  Link  from 'next/link'

<Link hreft='/'>Home</Link>
```
---

### Code Splitting 

Each page is controlled by its js and it only get served when we visit the page.


For intial request, we only got served js bundle that we need.
Only when we go to another page, we get another js bundle for that page. 
If we visit the same page again, we don't get another js bundle. 


When we build our next app for production,next is going to prefetch any code in the background that might be needed when the user clicks on a link from another page. 
It does this by looking at all of the link components on the current page. And it prefetches for any of those pages that those links navigate to. It makes a very quick user experience. 

### Layout 

inside components folder create Layout.js

comps

   |-- Layout.js

   |-- Navbar.js

   |-- Footer.js

in app.js
```
import Layout from '../comps/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

```

in Layout.js

```
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};
```

### Adding CSS 

We can add css by using global css file, styled jsx which let us write css in a component  or using css modules that next has built-in support for. Each component has its own unique  scoped style sheet. 

### Applying CSS modules

Make a css file in

styles > Home.modules.css

must use .module.css after file name. 

```
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
      <div className={styles.container}>
    )
```

### Naming the Selectors 

We have to select using class name. Cannot select the tag. 

eg.   className = 'title' , className = 'text'

then apply 

`<div className={styles.title}>`

---


## Using CSS Modules avoid the clash 

Even if we use same class names in different components, they are not gonna clash with each other. Becuase some random characters are added to the end of class names by Next when we use css modules. 

---

## Redirecting from 404 to home page 

```
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const NotFound = () => {
    const router = useRouter()
    useEffect(() =>  {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    },[])
    
```

---

## Image Component 

```
  import Image from 'next/image'
  <Image src='/logo.png' width={128} height={77}></Image>
```

Good thing about using Image insted of img element  tag is it automatically lazily loads the image. It optimizes for loading speed. 

---

## Adding Metada

``` 
 import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
```

--- 












