declare module '*.less' {
    const classes: { [key: string]: string };
    export default classes;
    // interface IClassName {
    //     [className: string]: string;
    // }
    //
    // const classNames: IClassName;
    // export = classNames;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
}