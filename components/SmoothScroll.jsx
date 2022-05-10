import React from "react";
import $ from "jquery";

export default class SmoothScroll extends React.Component {

    constructor() {
        super();
    }

    static scroll(hash) {
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800, () => {});
    }
}