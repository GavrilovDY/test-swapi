import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import People from "./components/People";
//import Planet from './components/People';
import Favorites from "./components/Favorites";

function App() {
  const [people, setPeople] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [planet, setPlanet] = useState([]);
  //let planet;
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchFavorites() {
      let res1 = await fetch("https://swapi.dev/api/people/?format=json");
      let data1 = await res1.json();
      setFavorites(data1.results);
      setLoading(false);
    }

    async function fetchPlanet() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data2 = await res.json();
      setPlanet(data2.results);
      setLoading(false);
    }

    fetchPeople();
    fetchFavorites();
    //fetchPlanet()
  }, []);

  console.log("planet", people[0]);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/people">
                <People data={people} />
              </Route>
              <Route exact path="/favorites">
                <Favorites data1={favorites} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;

/* <Favorites data1={favorites} /> */
