import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../share/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modal } from "../store/features/modalSlice";

const TermsAndConditions = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const { showModal } = useSelector((state) => state.showModal);

  return (
    <Wrapper show={showModal.payload}>
      <h1>Suplemento de Privacidade</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          facilisis sed nisi ut elementum. Proin mattis interdum metus et
          rhoncus. Aliquam molestie turpis ut condimentum fermentum. Suspendisse
          lobortis enim eu aliquet sagittis. Vivamus posuere, quam in tincidunt
          sollicitudin, odio felis ullamcorper lacus, non pellentesque risus
          tellus ut mi. Integer placerat finibus neque ut mollis. Sed tortor ex,
          scelerisque eget augue in, viverra elementum tellus. Nunc lacinia est
          augue, vulputate suscipit tortor ultricies eu. Sed scelerisque non
          lorem vitae facilisis. Nullam et urna eget lacus vehicula molestie.
          Curabitur feugiat justo eu rhoncus pulvinar. Fusce eget nibh in nisi
          efficitur feugiat. Ut efficitur feugiat est. Integer eleifend orci
          justo, id tincidunt tortor sollicitudin a. Morbi in nisi sed tortor
          lobortis tempus. In eget venenatis neque, eget condimentum justo.
          Mauris ornare tellus sit amet urna malesuada, convallis rhoncus mi
          sollicitudin. Aenean lacus leo, vestibulum eget lacinia sit amet,
          dignissim nec massa. Nam tincidunt velit ac arcu convallis tempus. Sed
          ut consectetur justo. Morbi quis quam eget urna ultricies vehicula.
          Nulla lobortis ante quis nisi efficitur, et molestie tellus dictum.
          Cras magna nisl, fringilla in est id, bibendum pellentesque nisi.
          Pellentesque fermentum ante ex, ac cursus ex fringilla sit amet.
          Suspendisse molestie malesuada egestas. In nisl eros, faucibus rhoncus
          efficitur ultrices, tempus ac erat. Integer ullamcorper sapien non
          nisl feugiat, ac tincidunt ex ullamcorper. In hac habitasse platea
          dictumst. Nulla in sem pellentesque, tempor est nec, tincidunt magna.
          Mauris finibus, libero viverra vulputate iaculis, velit magna suscipit
          lectus, sed ornare metus nibh id felis. Nulla cursus eu diam in
          pellentesque. Etiam iaculis arcu rutrum neque ullamcorper convallis at
          efficitur massa. Curabitur rhoncus aliquam tellus tempus hendrerit.
          Nulla rhoncus ante posuere, aliquam libero sit amet, ultrices urna.
          Cras tincidunt metus eu venenatis laoreet. Ut non laoreet diam.
          Praesent eget efficitur nulla, a rhoncus turpis. Praesent rhoncus orci
          nec lorem feugiat egestas. Maecenas viverra, leo non fringilla
          viverra, est sapien feugiat tellus, ac blandit nisl sapien non velit.
          Phasellus porttitor leo ex, nec lacinia ante rhoncus sagittis. Cras
          finibus placerat quam, aliquet efficitur risus pellentesque vitae.
          Suspendisse sed sodales ante. Mauris luctus leo sit amet orci
          consequat laoreet. Vestibulum est nibh, ullamcorper ut ullamcorper eu,
          semper ac lectus. Ut nec tortor tempor, sollicitudin nunc ac,
          sollicitudin nulla. Mauris suscipit, ipsum et posuere faucibus, nulla
          massa finibus felis, ac fermentum odio nisi pretium tellus. Nam quis
          dictum tellus, non lobortis sapien. In id ipsum quis enim pulvinar
          imperdiet. Morbi ac risus bibendum, semper nibh eu, pulvinar nisi.
          Nunc feugiat nulla elit, sit amet bibendum massa finibus ac. Nullam a
          accumsan dolor. Praesent porta dui vel lectus faucibus, non tincidunt
          eros tempor. Praesent iaculis placerat nulla. Aenean facilisis rhoncus
          nisi, nec convallis odio semper vitae. Vestibulum ut felis nec felis
          eleifend placerat. Suspendisse sit amet dui laoreet diam hendrerit
          maximus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam sit amet maximus metus.
          Curabitur facilisis ornare ligula, ut maximus tellus sagittis eu. In
          pellentesque tellus mauris, faucibus fermentum nunc viverra vel.
          Suspendisse potenti. Etiam a tempor lacus. Donec sit amet ipsum
          pellentesque, commodo nisi a, aliquet enim. Vivamus accumsan augue
          eget metus tristique luctus ut nec nisi. Sed vitae velit dui. Aenean
          et luctus purus, iaculis facilisis risus. Vivamus sollicitudin, risus
          eu dictum interdum, magna felis aliquet nulla, et feugiat metus lacus
          quis velit. Sed vel ligula aliquam diam ultricies condimentum quis et
          odio. In gravida lacus purus, a laoreet massa molestie et. Sed odio
          lacus, tristique nec ex in, tincidunt volutpat ipsum. Morbi rutrum mi
          non tortor laoreet, non pulvinar ex ultricies. Sed pretium massa eget
          erat volutpat vestibulum. Fusce quis urna at lorem pretium mollis.
          Nullam ornare lorem nisl, ac cursus nunc convallis ac. Suspendisse
          lobortis nulla eu massa convallis tincidunt. Ut auctor pretium elit
          nec aliquet. Nullam aliquam id mi in tincidunt. Duis massa erat,
          egestas imperdiet dolor blandit, luctus fermentum purus. Pellentesque
          varius quam nec dui molestie, ac fringilla ante faucibus. Aenean
          facilisis magna id lacinia elementum. Aliquam fringilla eleifend ipsum
          id maximus. Nunc vestibulum enim vitae augue pretium, eget consequat
          neque lobortis. Donec aliquam, odio eget porta sodales, velit mauris
          elementum lectus.rat volutpat vestibulum. Fusce quis urna at lorem
          pretium mollis. Nullam ornare lorem nisl, ac cursus nunc convallis ac.
          Suspendisse lobortis nulla eu massa convallis tincidunt. Ut auctor
          pretium elit nec aliquet. Nullam aliquam id mi in tincidunt. Duis
          massa erat, egestas imperdiet dolor blandit, luctus fermentum purus.
          Pellentesque varius quam nec dui molestie, ac fringilla ante faucibus.
          Aenean facilisis magna id lacinia elementum. Aliquam fringilla
          eleifend ipsum id maximus. Nunc vestibulum enim vitae augue pretium,
          eget consequat neque lobortis. Donec aliquam, odio eget porta sodales,
          velit mauris elementum lectus.rat volutpat vestibulum. Fusce quis urna
          at lorem pretium mollis. Nullam ornare lorem nisl, ac cursus nunc
          convallis ac. Suspendisse lobortis nulla eu massa convallis tincidunt.
          Ut auctor pretium elit nec aliquet. Nullam aliquam id mi in tincidunt.
          Duis massa erat, egestas imperdiet dolor blandit, luctus fermentum
          purus. Pellentesque varius quam nec dui molestie, ac fringilla ante
          faucibus. Aenean facilisis magna id lacinia elementum. Aliquam
          fringilla eleifend ipsum id maximus. Nunc vestibulum enim vitae augue
          pretium, eget consequat neque lobortis. Donec aliquam, odio eget porta
          sodales, velit mauris elementum lectus.
        </p>
      </div>
      <div>
        <Button
          variant="primary"
          onClick={() => {
            setValue("Ok");
            dispatch(modal(true));
          }}
        >
          Eu aceito a política de dados
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setValue("NoOk");
            dispatch(modal(true));
          }}
        >
          Não aceito. Sair do Serviço
        </Button>
      </div>
      <div>
        {showModal.payload && (
          <div>
            <div>
              <h2>{value === "NoOk" ? "Não aceito" : "Eu aceito"}</h2>
              <span onClick={() => dispatch(modal(false))}>X</span>
            </div>
            <Link to="/">
              <Button
                variant="tertiary"
                color={value === "Ok" ? "Ok" : value === "NoOk" ? "NoOk" : null}
                onClick={() => dispatch(modal(false))}
              >
                {value === "Ok" ? "Ok" : value === "NoOk" ? "No Ok" : null}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px 0;
  h1 {
    color: white;
    font-size: 2.5em;
    text-align: center;
  }
  > div:nth-child(2) {
    background-color: white;
    border-radius: var(--border-radius);
    padding: 25px;
    margin: 35px;
    overflow: auto;
    max-height: 215px;
    p {
      color: black;
      font-size: 1.5em;
    }
  }
  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    button {
      max-width: 350px;
      width: 100%;
      margin: 12px auto;
    }
  }
  > div:last-child {
    transition: all 0.8s ease-in-out;
    > div {
      padding: 25px;
      max-width: 290px;
      height: fit-content;
      width: 100%;
      z-index: 65;
      background-color: #f5f5f5;
      position: absolute;
      bottom: 5px;
      transition: all 0.8s ease-in-out;
      left: ${(props) => (props.show ? "50%" : "-50%")};
      transform: translate(-50%, -50%);
      top: 50%;
      border-radius: var(--border-radius);
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 9px 0;
      h2 {
        font-size: 2em;
      }
      span {
        font-size: 2em;
        font-weight: bold;
        border: 1px solid gray;
        padding: 19px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
      }
    }
    }
  }
`;

export default TermsAndConditions;
