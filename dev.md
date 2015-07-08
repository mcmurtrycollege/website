General:
---------------
Two types of pages:
    - normal page
        Normal pages are made using templates and then loaded in using the GenericView. Specified and configured in the router.

    - javascript generated pages
      Contain custom extensions of GenericView. Might Need to load from several templates.
      List of javascript pages: home page (views/main.js)

CSS:
- all rules in main.css

  Special CSS:
    subtitle
    - text in people pages

All text elements are padded to the left by 6px.

Flow:
---------------
Loading a site:
- user navigates to router
- router matches url
- passes in template to view
- render site

Index:
---------------
GenericView
    Basic view that all other views extend

    Properties:
        cssRoot
        title
        analytics code

    Hooks:
        preRender
        postRender

    Render:
        - loads css
        - clear html
        - apply preRender
        - renders template
        - reveals template
        - apply postRender
        - adds analytics

Groups:
---------------
Page
    GenericView
    Template

Other:
-------
Examples: dependency-examples/backbone_require/js/views/todos.js
