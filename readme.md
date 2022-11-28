# ResponsiveBox

It's a div that uses JavaScript to transform scale up or down, depending on the height and width you give as props.
## Usage
First install
		
    yarn add @ls30378/react-responsive-layout
    npm install @ls30378/react-responsive-layout

Than import it and use it
		
    import {ResponsiveBox} from '@ls30378/react-responsive-layout'
    ...
    <ResponsiveBox width={1300} height={800}>
    //your code here 
    </ResponsiveBox>
   
   Configuration (props):
   height - Height of the div
   width - Width of the div
   boxClass - Css custom class
