import React from 'react';
import { ComponentParams, ComponentRendering, Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type BooksDetailProps = ComponentProps &  {
  fields: {
    Title: { value: string } ,
    Content: { value: string },
    Description: { value: string },
    Price: { value: string },
    Availability:{ value: string },
    Image: { value: { src: string} };
  }
};



export const Default = (props: BooksDetailProps): JSX.Element => {
  console.log("img",props.fields.Image);
  return (
    <div className={`component`}>
      <div className="component-content">
        <h2 className='text-center mb-4 text-decoration-underline'>Book Detail</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center p-3"><img src={props.fields.Image.value?.src}/></div>
            <div className="col-md-6">
              <p className='text-decoration-underline font-weight-bold'>{props.fields.Title.value}</p>
              <br />
              <p>{props.fields.Description.value}</p>
              <p>Price: {props.fields.Price.value}</p>
              <p>Availability: <span className='text-success'>{props.fields.Availability.value}</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
