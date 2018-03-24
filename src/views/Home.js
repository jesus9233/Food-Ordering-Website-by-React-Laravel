import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FontTypes, FontWieghts } from '../base/Fonts';
import Center from '../components/Center';
import Text from '../components/Text';
import BackgroundImage from '../components/BackgroundImage';
import SearchBar from '../components/SearchBar';
import Space from '../components/Space';
import Spacing from '../base/Spacing';

const HomeContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 90vh;
`;

const AlignLeft = styled.div`
  align-items: flex-start;
`;

class Home extends Component {
  static propTypes = {
    history: PropTypes.any,
  };

  componentDidMount() {
    // TOOD:
  }

  onSearch = query => {
    this.props.history.push(`/search/${query}`);
  };

  render() {
    return (
      <HomeContainer>
        <BackgroundImage />

        <Center>
          <AlignLeft>
            <Text type={FontTypes.BigTitle} fontWeight={FontWieghts.semiBold} color="#fff">
              Lorem Ipsum is simply dummy text
            </Text>
            <br />
            <Text type={FontTypes.BigTitle} fontWeight={FontWieghts.semiBold} color="#fff">
              of the printing andtypesetting industry.
            </Text>
            <Space height={Spacing.get('8x')} display="block" />
            <SearchBar onSearch={this.onSearch} />
          </AlignLeft>
        </Center>
      </HomeContainer>
    );
  }
}

export default Home;