# qMoney Tracker

qMoney Tracker is a React app that allows users to add their transactions to help track their expenses. Built to study many React paradigms, with a focus on **authentication** through Firebase.

## Studies

### React Hooks
- useState
- useEffect
- useRef

### Custom Hooks
- useAuthContext
	- Provides the current state of authentication (stored in React Context) to many different components in the web app.
- useCollection
	- General purpose hook that pulls all data from a given collection, with querying and sorting built in.
- useFirestore
	- Uses React Reducer for storing the state of a document being updated (added, deleted, pending loading, error loading).
- useLogin
- useLogout
- useSignup

### React Router
- BrowserRouter, Switch, Route, Redirect

### Firestore Database
- Connection to cloud backend database.
- Real-time data and error handling.
	- Changes to transactions are reflected instantly.

### Authentication
- Users can sign up with email and password.
	- Users are stored in Firebase Authentication.
- Data is only shown to users that are authenticated.
- Different users have their own data.
- Data is safe by implementing Firestore Rules.

## Upcoming Features
- Allow users to add the date the transaction was made.
	- Sort by -> Date added, Date of transaction.
- Show total expenditure by adding up all transactions.
- Allow users to select a range of time to display transactions from.
	- Show the total of that time range.
- Account settings.
