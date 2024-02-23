import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  var contacts=[
    {
      id:"1",
      name:"Manisha",
      email:"manisha@tst.com"
    },
    {
      id:"2",
      name:"monika",
      email:"drjoshi@tst.com"
    }
  ];
  return (
    <>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </>
  );
}

export default App;
