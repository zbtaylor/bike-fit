import React, { useState, useEffect } from "react";
import { Menu, Segment, Grid, Sticky } from "semantic-ui-react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import MainNav from "../nav/MainNav";
import Axios from "axios";
import { SizeMe } from "react-sizeme";
import MeasurementVisualizer from "../measurement/MeasurementVisualizer";
import MeasurementDescription from "../measurement/MeasurementDescription";

const BikeView = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    Axios.get(`/api/bikes/${id}`)
      .then(res => {
        setBike(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, [id]);

  return (
    <>
      <MainNav {...props} />
      <Grid columns={2}>
        <Grid.Column>
          <BikeForm
            bike={bike}
            id={id}
            setHovered={setHovered}
            disabled={true}
            {...props}
          />
        </Grid.Column>
        <SizeMe
          render={({ size }) => (
            <Grid.Column>
              <Sticky offset={30}>
                <MeasurementVisualizer width={size.width} hovered={hovered} />
                <MeasurementDescription hovered={hovered} />
              </Sticky>
            </Grid.Column>
          )}
        />
      </Grid>
    </>
  );
};

export default BikeView;
