import React from "react";

export default function Quotes() {
  return (
    <div>
      <div className="quotes">
        <div className="wrapper">
          <h1>Some of my Favorite Quotes</h1>

          <div className="single-quote">
            <blockquote>
              Happiness can be found, even in the darkest of times, if one only
              remembers to turn on the light.
            </blockquote>
            <p className="quoted-by">
              Albus Dumbledore, Harry Potter and the Prisoner of Azkaban
            </p>
          </div>

          <div className="single-quote">
            <blockquote>
              Never forget what you are. The rest of the world will not. Wear it
              like armour, and it can never be used to hurt you.
            </blockquote>
            <p className="quoted-by">Tyrion Lannister, Game of Thrones</p>
          </div>

          <div className="single-quote">
            <blockquote>
              The freedom to make my own mistakes was all I ever wanted.
            </blockquote>
            <p className="quoted-by">Mance Rayder, Game of Thrones</p>
          </div>
        </div>
      </div>
    </div>
  );
}
