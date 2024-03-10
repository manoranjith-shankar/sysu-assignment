# sysu assignment

## Installation

Install dependencies

```
npm install
```

Run your local server at [localhost:5173](http://localhost:5173/)

```
npm run dev
```

if you want to use your own db, you can change the db-link from /src/story.jsx.
appsettings { databaseURL: " " }

---

# changes made

## [focused on features rather than small css bugs :)]
>I did not use .env for the db access url, because it is set to TEST-ONLY and i will delete it afterwards.

1. Overall
    - didn't fix the responsiveness, because, of inline custom css defintions, whole rework would be required, which takes more time than building the app with component based approach entirely using tailwind css.
    - but fixed responsiveness with every place i worked ;)

2. created Dynamic routing to display different categories.
   - Used useNavigate & useParam hooks
   - created a share button that copies the link of the category (currently in)
   
3. no user authentication, hence created the starred category feature to only work HARDCODED.
    - created a star button, that turns gold, when clicked
    - storing the favorites and displaying them simultaneously with popular categories


Please provide me with feedback on my code writing styles, documentation etc, which will greatly help me improve. <br />
Thank You.

Relevant react work: [originX NFT raffler](https://github.com/manoranjith-shankar/originX-nft-raffler). Built using react and scss with clean code, please have MetaMask installed to run the app locally.

Email: ma.ran4073@gmail.com <br />
Phone: +91 8610431082
