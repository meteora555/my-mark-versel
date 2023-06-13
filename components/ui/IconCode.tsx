import React, {FC, SVGProps} from 'react';

interface TitleProps extends SVGProps<SVGSVGElement> {

}

export const IconCode: FC<TitleProps> = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path
                d="M17.7253 17.4854H13.0968C12.4299 17.4693 12.013 16.4116 12.7384 16.0308C12.8153 15.9908 12.8991 15.9631 12.9853 15.9508C13.0222 15.9454 13.0591 15.9431 13.0968 15.9423H16.9538V12.0854C16.9538 12.0854 16.9891 11.717 17.1999 11.5208C17.3276 11.4023 17.4953 11.3285 17.6691 11.3162C17.7415 11.3108 17.7584 11.3154 17.7807 11.3162C17.9176 11.3293 17.9584 11.3454 18.033 11.3785C18.2838 11.4877 18.4661 11.7362 18.493 12.0108C18.4961 12.0439 18.4961 12.0523 18.4968 12.0854V16.7139C18.493 16.8493 18.4807 16.89 18.4538 16.9662C18.3584 17.2439 18.093 17.4539 17.7984 17.4816C17.7661 17.4846 17.7576 17.4846 17.7253 17.4854ZM6.9253 17.4854H2.29761C2.16222 17.4823 2.12145 17.4693 2.0453 17.4431C1.76761 17.347 1.55761 17.0816 1.52915 16.787C1.52607 16.7546 1.52684 16.7462 1.52607 16.7139V12.0854C1.52915 11.95 1.54222 11.9093 1.56838 11.8331C1.66453 11.5562 1.92991 11.3462 2.22376 11.3177C2.25684 11.3146 2.26453 11.3146 2.29761 11.3139H6.9253C6.93761 11.3146 6.94991 11.3146 6.96222 11.3154C7.09761 11.3246 7.13761 11.3393 7.21222 11.3693C7.47376 11.4739 7.66684 11.73 7.69376 12.0123C7.69684 12.0446 7.69607 12.0531 7.69684 12.0854V16.7139C7.69376 16.8493 7.68068 16.89 7.65453 16.9662C7.55838 17.2439 7.29299 17.4539 6.99915 17.4816C6.96684 17.4846 6.95838 17.4846 6.9253 17.4854ZM6.15453 12.857H3.06838V15.9423H6.15453V12.857ZM13.0968 9.77157H0.75453C0.556837 9.76388 0.502991 9.73773 0.40453 9.68773C-0.0216242 9.47003 -0.150086 8.81388 0.209145 8.45465C0.352222 8.31157 0.550683 8.23696 0.75453 8.22849H13.0968C13.1168 8.22926 13.1368 8.23003 13.1576 8.2308C13.3538 8.25388 13.4053 8.28465 13.4999 8.34234C13.8938 8.58311 13.9776 9.21003 13.6422 9.54542C13.4991 9.68849 13.3007 9.76311 13.0968 9.77157ZM19.2676 9.77157H16.1822C15.5945 9.76003 15.1722 8.96619 15.6107 8.48234C15.7545 8.32311 15.9691 8.23311 16.1822 8.22849H19.2676C19.2784 8.22849 19.2884 8.22926 19.2984 8.22926C19.9545 8.2685 20.3215 9.32388 19.6222 9.68542C19.5407 9.72773 19.4515 9.75465 19.3599 9.76619C19.3291 9.76926 19.2984 9.7708 19.2676 9.77157ZM6.9253 6.68619H2.29761C2.16222 6.68234 2.12145 6.67003 2.0453 6.64311C1.76761 6.54773 1.55761 6.28234 1.52915 5.98773C1.52607 5.95542 1.52684 5.94696 1.52607 5.91465V1.28619C1.52915 1.1508 1.54222 1.11003 1.56838 1.03388C1.66453 0.756187 1.92991 0.546187 2.22376 0.518495C2.25684 0.515418 2.26453 0.515418 2.29761 0.514648H6.9253C6.93761 0.514648 6.94991 0.515418 6.96222 0.515418C7.09761 0.525418 7.13761 0.540033 7.21222 0.570033C7.47376 0.674648 7.66684 0.930802 7.69376 1.21311C7.69684 1.24542 7.69607 1.25388 7.69684 1.28619V5.91465C7.69376 6.05003 7.68068 6.0908 7.65453 6.16696C7.55838 6.44388 7.29299 6.65465 6.99915 6.68234C6.96684 6.68542 6.95838 6.68542 6.9253 6.68619ZM17.7253 6.68619H13.0968C12.9615 6.68234 12.9207 6.67003 12.8445 6.64311C12.5668 6.54773 12.3568 6.28234 12.3291 5.98773C12.3261 5.95542 12.3261 5.94696 12.3253 5.91465V1.28619C12.3284 1.1508 12.3415 1.11003 12.3676 1.03388C12.4638 0.756956 12.7291 0.546187 13.0238 0.518495C13.0561 0.515418 13.0645 0.515418 13.0968 0.514648H17.7253C17.7376 0.514648 17.7499 0.515418 17.7615 0.515418C17.8968 0.525418 17.9368 0.540033 18.0115 0.570033C18.273 0.674648 18.4661 0.930802 18.493 1.21311C18.4961 1.24542 18.4961 1.25388 18.4968 1.28619V5.91465C18.493 6.05003 18.4807 6.0908 18.4538 6.16696C18.3584 6.44465 18.093 6.65465 17.7984 6.68234C17.7661 6.68542 17.7576 6.68542 17.7253 6.68619ZM6.15453 2.05773H3.06838V5.14311H6.15453V2.05773ZM16.9538 2.05773H13.8684V5.14311H16.9538V2.05773Z"
                fill="#666666"/>
        </svg>
    );
};