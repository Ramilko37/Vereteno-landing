import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro'
import styles from './styles.module.css'
import {introspectionFromSchema} from "graphql";
import {buildTimeValue} from "@testing-library/user-event/dist/utils";
import * as MainApi from "../../mainApi/mainApi";

const FlexWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
`

function myscript() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://mary.education/pl/lite/widget/script?id=678358";
    script.id = "15f0faa9cc110318d6a521a2539f35d669fcbdbf"
    document.getElementsByTagName("head")[0].appendChild(script);

}

const IFRAME_URL = `https://mary.education/pl/lite/widget/widget?${window.location.search.substring(1)}&id=678358&ref=${encodeURIComponent(document.referrer)}&loc=${encodeURIComponent(document.location.href)}`

function GetCourse(props) {



const iframe = document.body.getElementsByTagName("iframe")
const border = document.getElementsByName('submitButton')
    const iWindow = iframe.contentWindow;

    console.log(iWindow)

    const body = document.body;

body.classList.add(styles.body)




        return (
            <FlexWrapper>



                <iframe className={styles.iframe} id='be2482293570ad3bec7a994918173b0d31b260c0'
                        src={IFRAME_URL}></iframe>
            </FlexWrapper>
        )

}

export default GetCourse;
