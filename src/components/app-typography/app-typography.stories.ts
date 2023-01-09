// import { paperProps } from "./app-paper";

export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Core/Surface/Paper',
};

const Template = (args) => {
    return `<app-paper variant="${args.variant} elevation="${args.elevation}">${args.children}</app-paper>`
}

export const Elevation = Template.bind({});
Elevation.args = {variant:'elevation', children:'TESTE', elevation: 8 };

export const Outlined = Template.bind({});
Outlined.args = {variant:'outlined', children:'TESTE' };