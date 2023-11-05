---
order: 0
label: React Real User Monitoring
---
# React Real User Monitoring

Instrument your [React.js](https://react.dev/) applications with [`@baselime/react-rum`](https://www.npmjs.com/package/@baselime/react-rum). 

---


## Instrumentation

!!!
Check out a complete [example using Next.JS](https://github.com/baselime/react-rum/tree/main/example).
!!!

### Step 1: Install the SDK


Install `@baselime/react-rum` in your project.

```bash # :icon-terminal: terminal
npm i @baselime/react-rum
```

### Step 2: Initialise Real User Monitoring

Add the Baselime RUM component at the top level of your application.

+++ Next.js
Add BaselimeRum to your Root layout.jsx file

```jsx #12-14 :icon-code: app/layout.jsx 
import { BaselimeRum } from '@baselime/react-rum'
import { ErrorPage } from '../your-error-page'

const baselimeApiKey = process.env.NEXT_PUBLIC_BASELIME_KEY;

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <BaselimeRum apiKey={baselimeApiKey} enableWebVitals fallback={<ErrorPage />}>
          {children}
        </BaselimeRum>
      </body>
    </html>
  )
}


```
+++ Vite
```jsx #9-11 :icon-code: index.jsx
import React from 'react';
import { createRoot } from "react-dom/client";
import { App } from './src/your-app.js'
import { ErrorPage } from '../your-error-page'

const baselimeApiKey = import.meta.env.VITE_BASELIME_API_KEY
const root = createRoot(document.getElementById('app'));
root.render(
    <BaselimeRum apiKey={baselimeApiKey}  fallback={<ErrorPage />}> 
        <App />
    </BaselimeRum>
);
```
+++

Once this is done, all Unhandled exceptions are sent to Baselime

---
## Web Vitals

Additionally, you can enable capturing [web vitals](https://web.dev/vitals/) from your React applications. Use the `enableWebVitals` prop.

- [Time To First Byte (TTFB)](https://web.dev/ttfb/)
- [Largest Contentful Paint (LCP)](https://web.dev/lcp/)
- [First Input Delay (FID)](https://web.dev/fid/)
- [Cumulative Layout Shift (CLS)](https://web.dev/cls/)

```jsx !#1 :icon-code: index.jsx
<BaselimeRum apiKey={baselimeApiKey} enableWebVitals fallback={<ErrorPage />}>
   <App />
</BaselimeRum>
```
---


## Error Boundaries

To provide a better UX for end users, use React [Error Boundaries](https://legacy.reactjs.org/docs/error-boundaries.html#introducing-error-boundaries).

The BaselimeErrorBoundary catches errors in any of its child components, reports the error to Baselime. It works in conjunction with the `<BaselimeRum />` Component so that all errors are correlated by Page Load, and User Session.

```jsx #5 
import { BaselimeErrorBoundary } from '@baselime/react-rum';

function UserProfile({ child }) {

return (<BaselimeErrorBoundary fallback={<div>Could not display your user profile</div>}>
            <UserProfileImage />
            <UserName />
            <UserBiography />
        </BaselimeErrorBoundary>
    )
}
```

### Error Boundary Options

| Option                                 | Description                                                                                  |
|---------------------------------------|----------------------------------------------------------------------------------------------|
| `fallback`                            | A React element to be shown when an error occurs.                                          |
| `FallbackComponent`                   | A React component to be used as a fallback when an error occurs.                           |
| `fallbackRender`                      | A function for rendering the fallback UI when an error occurs.                              |
| `onError`                             | A callback function to handle errors with the signature `(error: Error, info: ErrorInfo) => void`. |
| `onReset`                             | A callback function to handle reset events with various reasons.                             |
| `resetKeys`                           | An array of keys that trigger a reset when changed.                                         |


You can use these options when creating an BaselimeErrorBoundary component, and choose which one best fits your needs based on how you want to handle errors and fallback UI rendering.

### Capture Exceptions

Error Boundaries do not catch [errors inside event handlers](https://legacy.reactjs.org/docs/error-boundaries.html#how-about-event-handlers). To catch Exceptions 

```jsx #10-11 :icon-code:
import { useBaselimeRum } from '@baselime/react-rum';

function MyButtonComponent() {
    const { captureException } = useBaselimeRum();

    function handleClick(e) {
        try { 
                 // Do something that could throw  
        } catch (error) {
            // sends errors to Baselime so they can be fixed   
            captureException(error)
       }
    }

    return <button onClick={handleClick}>Click Me</button>
}
```
---

## Custom Events

Capture custom events for analytics and monitoring. Like logs but with all the power of Baselime.

`sendEvent(message: string, payload)`

```jsx #9-11 :icon-code:
import { useBaselimeRum } from '@baselime/react-rum';

function CheckoutComponent() {
    const { sendEvent } = useBaselimeRum();

    function handleClick() {

        const checkoutSession = await createImaginaryCheckoutSession()
        sendEvent("Checkout Started", {
            ...checkoutSession
        })
    }

    return <button onClick={handleClick}>Checkout</button>
}

```

---
## Setting the active user

To set the User from another component then call

```jsx #8 :icon-code:
import { useBaselimeRum } from '@baselime/react-rum';

function UserCard({ child }) {
    const { setUser } = useBaselimeRum();

    function login(user) {
        // ... do user login things
        setUser(user.id);
    }
    return (
        <Button onClick={login}>Login</Button>
    }
```

---

## Using your data

Once the data is captured, you can query, search and analyse your data in the [Baselime console](https://console.baselime.io). You can create dashboards and alerts based on the Real User Monitoring metrics.