import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function Favorites({ data1 }) {
  return (
    <>
      <h1>Ваши любимые персонажи</h1>
      <Grid columns={2}>
        {data1.map((favorites, i) => {
          if (localStorage.getItem("favorites").includes(i))
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{favorites.name}</Card.Header>
                    <Card.Description>
                      <strong>Пол: </strong>
                      <p>{favorites.gender}</p>
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
