import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";

//import Favorite from "@material-ui/icons/Favorite";
//import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
//import Icon from 'react-icon-library';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

/* //образец работы с localStorage
export const function Favorites() => {
    var favList: = [{}]
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
    for (var i = 0; i<getArray.length; i++) {
        let x = getArray[i]
        favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '')
    }
    const titles = Object.keys (favList[0]);

} */

export default function People({ data }) {
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  const addFav = (props) => {
    let array = favorites;
    let addArray = true;
    array.map((item, key) => {
      if (item === props.i) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(props.i);
    }
    setFavorites([...array]);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    var storage = localStorage.getItem("favItem" + props.i || "0");
    if (storage == null) {
      localStorage.setItem("favItem" + props.i, JSON.stringify(props.item));
    } else {
      localStorage.removeItem("favItem" + props.i);
    }
  };
  console.log(localStorage.getItem("favorites").includes("5"));
  return (
    <>
      <h1>Персонажи</h1>
      <Grid columns={2}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Пол: </strong>
                    <p>{people.gender}</p>
                    <strong>Планета: </strong>
                    <p></p>
                    <strong>Фото: </strong>

                    <p>
                      <img
                        src={
                          "https://starwars-visualguide.com/assets/img/characters/" +
                          (i + 1) +
                          ".jpg"
                        }
                        width="85%"
                      ></img>
                    </p>
                    {favorites.includes(i) ? (
                      <IoIosHeart
                        onClick={() => addFav({ people, i })}
                        style={{ color: "red" }}
                      />
                    ) : (
                      <IoIosHeartEmpty
                        onClick={() => addFav({ people, i })}
                        style={{ color: "red" }}
                      />
                    )}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
