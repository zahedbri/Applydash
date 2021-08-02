/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Search from "search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]
const Layout = ({ location, title, children }) => {
    // ...

    return ( <
        div style = {
            {
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }
        } >
        <
        header >
        <
        Search indices = { searchIndices }
        /> {header}{" "} <
        /header>{" "} <
        main > { children } < /main>{" "} <
        footer > { " " }© { new Date().getFullYear() }, Built with { ` ` } { " " } <
        a href = "https://www.gatsbyjs.com" > Gatsby < /a>{" "} <
        /footer>{" "} <
        /div>
    )
}
var styles = StyleSheet.create({
    container: {
        padding: rhythm(1),
        marginBottom: rhythm(1.5),
    },
})
export default Layout