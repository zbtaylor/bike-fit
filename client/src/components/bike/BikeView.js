import React, { useState, useEffect } from "react";
import { Menu, Segment, Grid, Sticky } from "semantic-ui-react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import MainNav from "../nav/MainNav";
import BikeVisualize from "./BikeVisualize";
import Axios from "axios";
import { SizeMe } from "react-sizeme";

const BikeView = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [changes, setChanges] = useState([]);
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState("details");
  const [hovered, setHovered] = useState();

  useEffect(() => {
    Axios.get(`/api/bikes/${id}`)
      .then(res => {
        setBike(res.data);
        setChanges(res.data.changes);
      })
      .catch(err => {
        // handle error
      });
  }, [id]);

  const handleClick = () => {
    if (active === "details") {
      setActive("fit");
    } else {
      setActive("details");
    }
  };

  return (
    <>
      <MainNav {...props} />
      <Grid columns={2}>
        <SizeMe
          render={({ size }) => (
            <Grid.Column>
              <Sticky offset={30}>
                <BikeVisualize width={size.width} hovered={hovered} />
              </Sticky>
            </Grid.Column>
          )}
        />
        <Grid.Column>
          <BikeForm
            bike={bike}
            id={id}
            disabled={true}
            setHovered={setHovered}
            {...props}
          />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default BikeView;
