import React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";

/**
 * Table
 */
export default function Table({
  headers,
  data,
  suffix,
  nestedGroup,
  useTokenData,
  calculateValue,
}) {
  const TokenData = () => {
    let _tokenArray = [];
    const _Tokens = nestedGroup ? Tokens[nestedGroup][data] : Tokens[data];
    for (let _token in _Tokens) {
      let _value;
      let _description;
      let _calculatedValue;
      if (Object.prototype.hasOwnProperty.call(_Tokens[_token], "value")) {
        _value = _Tokens[_token].value;
        if (calculateValue) {
          let _rawValue;
          if (_value[0] == "{") {
            _value = _value.substring(1, _value.length - 1);
            _value = lookupValue(_value);
          }
          _rawValue = _value.split("rem");
          _calculatedValue = `${_rawValue[0] * 16}px`;
        }
      }
      if (
        Object.prototype.hasOwnProperty.call(_Tokens[_token], "description")
      ) {
        _description = _Tokens[_token].description;
      }
      if (_token != "description") {
        _tokenArray.push({
          name: _token,
          value: _value,
          calculatedValue: _calculatedValue,
          description: _description,
        });
      }
    }
    _tokenArray.sort(compare);

    return (
      <>
        {_tokenArray.map((item, i) => {
          return (
            <tr key={i}>
              <td>
                {item.name}
                {suffix && suffix}
              </td>
              <td>{item.value}</td>
              {item.calculatedValue && <td>{item.calculatedValue}</td>}
              <td>{item.description ? item.description : "--"}</td>
            </tr>
          );
        })}
      </>
    );
  };

  /** Looks up the value of a token alias path depth supported up to 3 token[1][2][3]*/
  function lookupValue(lookUpToken) {
    const path = lookUpToken.split(".");
    let value;
    switch (path.length) {
      case 1:
        value = Tokens[path[0]].value;
        break;
      case 2:
        value = Tokens[path[0]][path[1]].value;
        break;
      case 3:
        value = Tokens[path[0]][path[1]][path[2]].value;
        break;
      default:
        break;
    }
    return value;
  }
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const Container = styled("div", {
    overflowX: "auto",
    width: "100%",
  });
  const Table = styled("table", {
    borderCollapse: "collapse",
    borderSpacing: "0",
    width: "100%",
    marginBottom: "calc($050 / 2)",
    "& th": {
      textAlign: "left",
      fontWeight: "$light",
      borderBottom: "1px solid $subtle",
      fontSize: "$100",
      color: "$accessible",
      paddingInlineStart: 0,
      py: "$100",
    },
    "& td": {
      minWidth: "auto",
      borderBottom: "1px solid $subtle",
      fontSize: "$100",
      paddingInlineStart: 0,
      paddingInlineEnd: "$100",
      color: "$accessible",
      py: "$100",
    },
    // style the first column of the table
    "& td:first-child": {
      fontWeight: "$bold",
      color: "$primary",
    },
  });

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {headers &&
              headers.map((header, i) => {
                return <th key={i}>{header}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {useTokenData ? (
            <TokenData />
          ) : (
            data.map((item, i) => {
              return (
                <tr key={i}>
                  {item.map((td, cell) => {
                    return <td key={cell}>{td}</td>;
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Container>
  );
}
