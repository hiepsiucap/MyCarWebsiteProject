import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'
import { DetailCar } from '../Utiliz/Constants';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getRequest } from '../Utiliz/services';
const storyMeta = {
  title: 'Demo/Basic',
};

 const Basic =({sameid})=> {
  console.log(sameid)
  let {id}= useParams();
  console.log(sameid)
  if(!id)
    {
      id=sameid;
    }
  const [data, changedata]=useState([]);
  useEffect(()=>{
   const fetchData=async()=>
    {
      const responsedata= await getRequest(`http://localhost:8080/api/cars/${id}`)
      changedata(responsedata.images);
    }
    fetchData();
    
  },[id, useParams])
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
            original={data[0]?.image}
            thumbnail={data[0]?.image}
            width="1200"
            height="800"
            alt="Photo of seashore by Folkert Gorter"
          >
            {({ ref, open }) => (
              <img
                style={{ cursor: 'pointer', width: "700px" , height:"450px"  }}
                src={data[0]?.image}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={data[1]?.image}
            thumbnail={data[1]?.image}
            width="1600"
            height="1068"
            alt="Photo of mountain lake by Samuel Rohl"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={data[1]?.image}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={data[2]?.image}
            thumbnail={data[2]?.image}
            width="1600"
            height="1066"
            alt="Photo of fog in the village by Ales Krivec"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={data[2]?.image}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={data[3]?.image}
            thumbnail={data[3]?.image}
            width="1600"
            height="1066"
            alt="Photo of river sunset by Michael Hull"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src={data[3]?.image}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original={data[4]?.image}
            thumbnail={data[4]?.image}
            width="1600"
            height="1066"
            alt="Photo of bear by Thomas Lefebvre"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={data[4]?.image}
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