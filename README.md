1. 'npx create-next-app@latest my-app --typescript --tailwind --eslint '

2. we are going to shadcn library for styling => npx shadcn-ui@latest init

3. use clerk for authentication .. instead of using .env.local , we are going to use .env which holds all our api keys because we are going to use prisma.

4. Component from clerk => <UserButton afterSignOutUrl="/" />
   => import {auth , signIn , signUp useUser} form '@clerk/nextjs'

5. we are using lucid react icon.

6. react-markdown => this is the package that helps you to display code. "npm i react-markdown".

7. router.refresh() just refresh all routes to get new data.

8. JSON.stringify() convert javascript value to json string.

---

# AI tools :-

{refer this for connection => https://stackoverflow.com/questions/76917525/openai-api-error-module-openai-has-no-exported-member-configuration}

1. first create an account on open-AI.
2. get api key and paste in your environment file.
3. install openai => npm i openai

4. install axios => npm i axios

=> for music and video we are going to use replicate ai.
--> GO there and get your api token
-> install replicate => "npm i replicate"
=> we are using audio generation model > riffusion ("https://replicate.com/riffusion/riffusion")
=> full docs -> "https://replicate.com/riffusion/riffusion/api"
=> For video we are using "zero scope model"

# shadn components that we are using in this app :-

1. avatar
2. sheet
3. form
4. input
5. card
6. button
7. dialog
8. progress
9. Badge

# Api Limit :-

1. installation prisma => npm i -D prisma.
2. initialization prisma => npx prisma init
3. go to planet scale and make your account.
4. copy env and prisma file.
5. install prisma client => npm i @prisma/client
6. create prismadb.ts file and do some initial work
7. go to schema.prisma file and create your model
8. push => npx prisma db push
   // every time you modify your prisma you have to generate it and push it again.
9. npx generate prisma
10. to watch your studio => npx prisma studio
11. Create , unique and findUnique are the three functions of prisma.

# Pro Modal UI

1. npm i zustand => better than react-context and react-redux.
2. going to use dialog from shadcn

# Stripe integration :-

1. first create stripe account
2. COPY secret key and paste in .env file
3. install "npm i stripe"
4. create stripe.tsx file and make setup
5. create subscription modal in prisma file
   reference => {"https://stripe.com/docs/api/checkout/sessions/create"}
6. after creating prisma modal make sure you push it.
7. create stripe api route.
8. create webhook.
9. now to create webhook_secret_key go to stripe webhook page. : In production we click on 'add on endpoint' but in local machine you click on test in a local environment.
10. type 'stripe listen --forward-to localhost:3000/api/webhook' and get your key.

# 4242424242 is testing card details

# add /api/webhook route to your middleware

# make sure this is also running [stripe listen --forward-to localhost:3000/api/webhook]

---

1. if prisma studio is not working for you .. you can type in the terminal :- 'npx prisma migrate reset' => i will clear all the database then you have to do two more steps that is > generate and push.

2. for error handling we will use 'npm i react-hot-toast' package.

3. if you want to use crisp then you have to create an account on crisp and install a package "npm i crisp-sdk-web" . copy website-id from crisp.com .. paste crisp provider above the body in layout.tsx.

4. use auth supports client component and auth supports server components

5. for type-writer effect install = "npm i typewriter-effect"

# Deployment :-

1. Now for deployment > go to package.json and add script :- "postinstall" : "prisma generate"

2. go to terminal "npm run lint" to check if your project have any error.

3. and go add it into github and add to vercel.
