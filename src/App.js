import React, { Component } from 'react';
import './Counter.js'
import Counter from './Counter.js';

class App extends Component {

  state = {
    cats: [
      "https://cdn2.thecatapi.com/images/196.gif",
      "https://cdn2.thecatapi.com/images/bok.jpg",
      "https://24.media.tumblr.com/tumblr_lspgdbYQTI1qzfgamo1_500.jpg",
      "https://25.media.tumblr.com/tumblr_lrlc365YDx1qcr8tuo1_250.gif",
      "https://24.media.tumblr.com/T4oL9c0wZcuyxsa8EIG07tLf_400.jpg",
      "https://24.media.tumblr.com/tumblr_lxpo2mbTW71qzv52ko1_500.jpg",
      "https://25.media.tumblr.com/tumblr_loxd1pxPoj1qejyujo1_500.jpg",
      "https://24.media.tumblr.com/tumblr_kzghx9JiWH1qz72j6o1_500.gif",
      "https://28.media.tumblr.com/tumblr_m2sm2wPRPe1qhwmnpo1_500.jpg",
      "https://25.media.tumblr.com/hA6zECTlEg4sfljwHQf5jm4So1_400.jpg",
      "https://25.media.tumblr.com/tumblr_m305xw3kUO1qzex9io1_500.jpg",
      "https://28.media.tumblr.com/tumblr_lmo5j3aqO41qjmniro1_400.gif",
      "https://24.media.tumblr.com/tumblr_m3jf7dL0yJ1r73wdao1_500.jpg",
      "https://25.media.tumblr.com/tumblr_lpgf9afCak1qbhms5o1_500.jpg",
      "https://25.media.tumblr.com/tumblr_lm676sWaId1qbe5pxo1_400.jpg",
      "https://24.media.tumblr.com/tumblr_lzju9zypmj1qfjjglo1_400.gif",
      "https://25.media.tumblr.com/tumblr_lhufyaPNGr1qfyzelo1_500.jpg",
      "https://24.media.tumblr.com/tumblr_m3jevySmne1r73wdao1_500.jpg",
      "https://25.media.tumblr.com/tumblr_m02mqlRSqt1ql7d7ko1_500.jpg",
      "https://24.media.tumblr.com/Jjkybd3nSawalbne72W8LYos_500.jpg",
      "https://24.media.tumblr.com/tumblr_lvnsu2RLnY1qb8kh2o1_500.jpg",
      "https://24.media.tumblr.com/tumblr_ltaippdvdJ1r4xjo2o1_500.jpg",
      // put here your own links to cats
    ],
    indexOfCurrentCat: 0,
    rightColumn: [],
    leftColumn: [],
  }

  nextCat = () => {
    this.setState(previousState => {
      const indexOfCurrentCat = previousState.indexOfCurrentCat + 1;
      if (indexOfCurrentCat >= previousState.cats.length) {
        return { indexOfCurrentCat: 0 };
      }
      return { indexOfCurrentCat };
    });
  }

  putToColumnLeft = () => {
    const cat = this.state.cats[this.state.indexOfCurrentCat];
    this.setState({
      leftColumn: [
        cat,
        ...this.state.leftColumn,
      ],
    });
  }

  putToColumnRight = () => {
    const cat = this.state.cats[this.state.indexOfCurrentCat];
    this.setState({
      rightColumn: [
        cat,
        ...this.state.rightColumn,
      ],
    });
  }

  handleLeftButton = () => {
    this.putToColumnLeft();
    this.nextCat();
  }

  handleRightButton = () => {
    this.putToColumnRight();
    this.nextCat();
  }

  render() {
    return (
      <div className='container'>
        <div className='image-block'>
          <img src={this.state.cats[this.state.indexOfCurrentCat]} />
        </div>
        <div className='button-block'>
          <button onClick={this.handleLeftButton}>❤️</button>
          <button onClick={this.handleRightButton}>😻</button>
        </div>
        <div className='Columns'>
          <div className='Column'>
            {this.state.leftColumn.map(cat => (
              <div>{cat}</div>
            ))}
          </div>
          <div className='Column'>
            {this.state.rightColumn.map(cat => (
              <div>{cat}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
