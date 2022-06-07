import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro'



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




        return (
            <FlexWrapper>



                <iframe style={{ width:'100%', height:'100%' }} id='be2482293570ad3bec7a994918173b0d31b260c0'
                        src={IFRAME_URL}></iframe>
            </FlexWrapper>
        )

}

export default GetCourse;
