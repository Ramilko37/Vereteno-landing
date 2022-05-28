import React, {useState} from "react";
import styled from "styled-components";


const DropDownContainer = styled("div")`
  width: 94px;
  height: 43px;
  background: #FFFFFF;
  border: 2px solid #CEA687;
  border-radius: 8px;
  margin-right: 16px;
  position: relative;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #868686;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  width: 327px;
  background: #fff;
  box-shadow: 0px 4px 24px rgba(6, 22, 40, 0.08);
  border-radius: 4px;
  border: none;
  
`;

const DropDownList = styled("ul")`
  padding: 0;
  padding-left: 1em;
  background: #ffffff;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  width: 100%;
  height: 100%;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const FlexWrapper = styled("div")`
  display: flex;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #868686;
`


const options = [
    {"name":"Afghanistan","flag":"🇦🇫","code":"AF","dial_code":"+93"},
    {"name":"Åland Islands","flag":"🇦🇽","code":"AX","dial_code":"+358"},


];

export default function DropDown({codeValue, setValue}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);


    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        codeValue = value.slice(1);
        console.log(selectedOption, codeValue, typeof codeValue);
    };

    return (
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>
                    {selectedOption || '+7       '}
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map(option => (
                                <ListItem onClick={onOptionClicked(option.dial_code)} key={Math.random()}>
                                    {
                                        <FlexWrapper>
                                            {option.flag}
                                            <a>{option.name}</a>
                                            <a>{option.dial_code}</a>
                                        </FlexWrapper>
                                    }
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
    );
}
