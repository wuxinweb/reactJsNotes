import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSearchSizeChange, getSearchTrending, getSearchInfoMouseStatusChange, getSearchInfoPageChange } from './store/action_creators';

import {
  HeaderWrapper,
  HaaderLimit,
  Logo,
  Nav,
  NavItem,
  NavItemTagA,
  NavSearch,
  NavAction,
  NavActionA,
  NavActionBtn,
  SearchInfo,
  SearchInfoWrapper,
  SearchInfoHeader,
  SearchInfoSwitch,
  SearchInfoMain,
  SearchInfoItem,
} from './style';

class Header extends Component {

  render() {
    const {
      isSearch,
      isMouseIn,
      handleBlur,
      handleFocus,
      searchTrending,
      search_page_index,
      handleMouseEnter,
      handleMouseLeave,
      handleSearchPageSize,
    } = this.props;

    const newSearchTrending = searchTrending.toJS();

    const SearchTrending_page = [];

    if (searchTrending.size !== 0) {
      const end_len = searchTrending.size > search_page_index * 10 ? search_page_index * 10 : searchTrending.size;
      for (let i = (search_page_index - 1) * 10; i < end_len; i++) {
        const item = newSearchTrending[i];

        SearchTrending_page.push(
          <Link to="#" key={item}><SearchInfoItem>{item}</SearchInfoItem></Link>
        );
      }
    }


    return (
      <HeaderWrapper>
        <HaaderLimit>
          <Logo />
          <Nav className="container">
            <NavItem>
              <Link to="/">
                <NavItemTagA className="active">
                  <i className="iconfont">&#xe602;</i> 首页
                </NavItemTagA>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/download">
                <NavItemTagA href="#">
                  <i className="iconfont">&#xe685;</i> 下载App
                </NavItemTagA>
              </Link>
            </NavItem>
            <NavItem>
              <CSSTransition
                classNames="nacSearch"
                timeout={400}
                in={isSearch} // 状态
              >
                <NavSearch
                  placeholder="搜索"
                  onFocus={() => handleFocus(searchTrending)}
                  onBlur={handleBlur}
                  className={isSearch ? "search" : ""}
                />
              </CSSTransition>
              <i className={(isSearch ? "active" : "") + " iconfont"}>&#xe69a;</i>

              <SearchInfo
                className={isSearch || isMouseIn ? "search" : ""}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <SearchInfoWrapper>
                  <SearchInfoHeader>
                    热门搜索
                    <SearchInfoSwitch onClick={() => handleSearchPageSize(this.iconSpin)}>
                      <i className="iconfont" ref={(icon) => { this.iconSpin = icon }}>&#xe784;</i> 换一换
                    </SearchInfoSwitch>
                  </SearchInfoHeader>
                  <SearchInfoMain>
                    {
                      SearchTrending_page
                    }
                  </SearchInfoMain>
                </SearchInfoWrapper>
              </SearchInfo>
            </NavItem>
          </Nav>
          <NavAction>
            <Link to="/login">
              <NavActionA>登陆</NavActionA>
            </Link>
            <Link to="/reg">
              <NavActionBtn>注册</NavActionBtn>
            </Link>
            <NavActionBtn className="extrude"><i className="iconfont">&#xe616;</i> 写文章</NavActionBtn>
          </NavAction>
        </HaaderLimit>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    isSearch: state.getIn(['header', 'isSearch']),
    searchTrending: state.getIn(['header', 'searchTrending']),
    search_page_index: state.getIn(['header', 'search_page_index']),
    search_page_size: state.getIn(['header', 'search_page_size']),
    isMouseIn: state.getIn(['header', 'isMouseIn']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(searchTrending) {
      const action_1 = getSearchSizeChange(true);
      dispatch(action_1);

      if (searchTrending.size === 0) {
        const action_2 = getSearchTrending();
        dispatch(action_2);
      }

    },
    handleBlur() {
      const action = getSearchSizeChange(false);
      dispatch(action);
    },
    handleMouseEnter() {
      const action = getSearchInfoMouseStatusChange(true);
      dispatch(action);
    },
    handleMouseLeave() {
      const action = getSearchInfoMouseStatusChange(false);
      dispatch(action);
    },
    handleSearchPageSize(spinIcon) {

      const rotate = Number(spinIcon.style.transform.replace(/([^0-9])/ig, ""));

      spinIcon.style.transform = `rotate(${rotate + 360}deg)`;

      const action = getSearchInfoPageChange();
      dispatch(action);

    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);