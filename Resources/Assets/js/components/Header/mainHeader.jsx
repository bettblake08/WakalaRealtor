import React, { Component } from 'react';
import { webUrl, setSVGIcons} from '../../abstract/variables';
import Menu from '../UI/menu';

class MainHeader extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.togglePopupMenu = this.togglePopupMenu.bind(this);

        this.state = {
            toggleHeader: 0,
            togglePopupMenu: 0,
        }
    }

    componentDidMount() {
        document.getElementById('svg_icons').innerHTML = setSVGIcons();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        var offset = 2;
        var state = this.state;

        var scrollYpos = window.scrollY;

        if (scrollYpos > offset && state.toggleHeader == 0) {
            state.toggleHeader = 1;
            this.setState(state);

        }
        else if (scrollYpos < offset && state.toggleHeader == 1) {
            state.toggleHeader = 0;
            this.setState(state);
        }

    }

    togglePopupMenu(menu) {
        var state = this.state;
        state.togglePopupMenu = state.togglePopupMenu == menu ? 0 : menu;
        this.setState(state);
    }

    render() {
        var headerClass = "header header";
        this.state.toggleHeader == 0 ? headerClass += "--normal" : headerClass += "--float";
        var popupMenu = "popupMenu";

        var menuLinks = [
            [
                {
                    url: webUrl + 'login',
                    text: 't-10'
                },
                {
                    url: webUrl + 'sign_up',
                    text: 't-55'
                }
            ]
        ];

        return (
            <div className={headerClass}>
                <div className="row">
                    <div className="header__left">
                        <a href={webUrl}>
                            <div className="header__logo">
                                <img src={webUrl + 'assets/images/logo.png'} />
                            </div>
                        </a>
                        <div className="header__title f_banner_1">Wakala Realtor</div>
                    </div>

                    <div className="header__right">
                        <div className="header__right__menuBtn iconBtn--normal" onClick={() => { this.togglePopupMenu(1) }}>
                            <svg className="icon">
                                <use xlinkHref="#menu" />
                            </svg>
                        </div>

                        <div className="header__right__text f_normal f_text-capitalize t-56"></div>

                    </div>
                </div>

                <div className={this.state.togglePopupMenu == 1 ? popupMenu + "--active" : popupMenu + "--disabled"}>
                    <div className="popupMenu__mainMenu">
                        <Menu
                            parent={this} 
                            menu={menuLinks} 
                            config={{
                                class:"menuType1",
                                opposite:true
                            }}/>
                    </div>
                </div>

            </div>




        );
    }
}

export default MainHeader;