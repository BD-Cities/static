module.exports = {
    content: [
        './train-schedule/**/*.html',
    ],
    theme: {
        extend: {}
    },
    plugins: [
        // This plugin allows you to create custom Tailwind groups.
        // e.g. if you use ['custom'], you could use it as follows:
        //      In the parent: group-custom
        //      In the child:  group-custom-hover:
        require('tailwindcss-labeled-groups')([
            'custom', '1', /* RENAME ME! */ 
        ])
    ]
}