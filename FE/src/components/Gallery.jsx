import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'
import detail5 from "../assets/detail5.jpg"
import detail6 from "../assets/detail6.jpg"
import detail7 from "../assets/detail7.jpg"
import detail8 from "../assets/detail8.jpg"
const storyMeta = {
  title: 'Demo/Basic',
};
 const Basic =()=> {
    const smallItemStyles = {
      cursor: 'pointer',
      objectFit: 'fill',
      width: '100%',
      height: "215px",
    };
    return (
      <Gallery>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '700px 300px 300px',
            gridTemplateRows: '225px 225px',
            gridGap: 12,
          }}
        >
          <Item
            original={detail8}
            thumbnail={detail8}
            width="1200"
            height="800"
            alt="Photo of seashore by Folkert Gorter"
          >
            {({ ref, open }) => (
              <img
                style={{ cursor: 'pointer', width: "700px" , height:"450px"  }}
                src={detail8}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={detail5}
            thumbnail={detail5}
            width="1600"
            height="1068"
            alt="Photo of mountain lake by Samuel Rohl"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={detail5}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={detail6}
            thumbnail={detail6}
            width="1600"
            height="1066"
            alt="Photo of fog in the village by Ales Krivec"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={detail6}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={detail7}
            thumbnail={detail7}
            width="1600"
            height="1066"
            alt="Photo of river sunset by Michael Hull"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src={detail7}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={detail7}
            thumbnail={detail7}
            width="1600"
            height="1066"
            alt="Photo of bear by Thomas Lefebvre"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={detail7}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </Gallery>
    );
};
export default Basic