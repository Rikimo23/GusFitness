import {useState, useEffect}  from 'react'

export default function AnatomyBackView({action = undefined}){
    const [partClicked, setPartClicked] = useState("")
    useEffect(()=>{
        console.log(`part clicked: ${partClicked}`)
        if(action !== undefined) action(partClicked)
    },[partClicked])

    const onPartClicked=(event)=>{
        if(event.target.tagName === "path"){
            setPartClicked(event.target.getAttribute('data-part-name'))
        }
    }
    return(
    <svg 
    className="muscleSvg" 
    id="backGroup" 
    onClick={onPartClicked}
    width="231" height="530" viewBox="0 0 231 530" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_144_99)">
<path data-part-name ="left shoulder blade back" fillRule="evenodd" clipRule="evenodd" d="M45.646 83.1948C45.646 83.1948 56.419 68.9928 79 65.0088C81.081 64.8358 83.833 102.494 86.533 114.503C86.533 114.503 74.335 124.054 59 117.009C59 117.009 54.759 98.6078 56 93.0088C56 93.0088 53.54 87.7378 45.646 83.1948Z" fill="#EA3650"/>
<path data-part-name ="right shoulder blade back" fillRule="evenodd" clipRule="evenodd" d="M162 65.0078C162 65.0078 160.858 67.7758 159.76 69.6918C159.76 69.6918 158.832 106.703 156.236 115.768C156.236 115.768 165.393 120.447 186 119.009C186 119.009 186.984 114.034 187.568 107.772C187.942 103.764 187.802 99.1238 188.093 95.3168C188.346 92.0008 189.028 89.3498 189.367 87.8738C189.367 87.8738 180.394 67.5828 179.557 66.8558L162 65.0078Z" fill="#EA3650"/>
<path data-part-name ="left calf back" fillRule="evenodd" clipRule="evenodd" d="M76.365 419.937C84.798 430.473 85.56 433.304 86 435.009L90.417 426.157C90.417 426.157 107.225 450.152 108 457.009C108.775 463.866 110.955 478.482 112 486.009C113.045 493.536 113.021 521.542 111 525.009C111 525.009 93.859 519.46 89 502.009C89 502.009 92.471 519.004 79 519.009C70.529 519.012 66.749 495.912 68 483.009C69.251 470.106 69.763 446.925 70 444.009C70.237 441.093 76.034 423.414 76.365 419.937Z" fill="#6B5DFC"/>
<path data-part-name ="right calf back back" fillRule="evenodd" clipRule="evenodd" d="M165.596 426.611C158.163 431.148 155.988 438.304 155.548 440.009L151.131 431.157C151.131 431.157 138.117 450.109 138.071 457.009C138.025 463.866 136.922 474.482 135.548 489.009C134.832 496.574 137.527 525.542 139.548 529.009C139.548 529.009 154.689 521.46 159.548 504.009C159.548 504.009 156.077 521.004 169.548 521.009C178.019 521.012 181.799 497.912 180.548 485.009C179.297 472.106 175.859 459.918 175.548 457.009C173.311 436.093 165.927 430.088 165.596 426.611Z" fill="#6B5DFC"/>
<path data-part-name ="glutes back" fillRule="evenodd" clipRule="evenodd" d="M116 302.009C116.938 302.009 118.949 300.965 122.006 307.009C128.2 319.253 140.884 318.009 153 318.009C165.116 318.009 175.919 293.561 174 281.009C172.081 268.457 174.496 247.796 173 244.009C171.504 240.222 170 230.009 170 230.009C170 230.009 164.88 232.333 151 238.009C131.12 246.138 116 276.009 116 276.009C111.538 267.532 108.772 255.125 100.565 246.722C87.195 233.034 70 225.009 70 225.009C69.718 226.803 62.441 240.894 63 260.009C63.559 279.124 59.418 265.901 64 290.009C66.639 303.892 71.309 313.708 78 314.009C81.25 314.155 106.346 310.469 113 303.009C114.454 301.379 115.062 302.009 116 302.009Z" fill="#765DFC"/>
<path data-part-name ="left deltoid back" fillRule="evenodd" clipRule="evenodd" d="M26.136 109.289C26.136 109.289 24.624 83.7888 31.697 69.0088C38.77 54.2288 51.697 53.0088 51.697 53.0088L61.513 67.0088L56.697 70.0088H61.513L55.697 93.0088C55.697 93.0088 51.583 84.0208 43.248 83.9958C36.629 83.9758 26.831 108.825 26.136 109.289Z" fill="#CE4FDB"/>
<path data-part-name ="right deltoid back" fillRule="evenodd" clipRule="evenodd" d="M216.503 110.289C216.503 110.289 221.015 79.7888 213.942 65.0088C206.869 50.2288 191.942 47.0088 191.942 47.0088L179.557 63.0088L184.373 66.0088H179.557L189.366 87.0268C189.366 87.0268 191.105 81.6838 195.114 83.3338C204.733 87.2958 215.808 107.825 216.503 110.289Z" fill="#CE4FDB"/>
<path data-part-name ="left forearm back" fillRule="evenodd" clipRule="evenodd" d="M20.565 155.009C20.565 155.009 16.175 173.17 13 181.009C9.825 188.848 10.163 206.123 7 223.009C3.837 239.895 0 260.009 0 260.009C0 260.009 18.119 264.655 20.565 263.009C20.565 263.009 26.408 248.74 30 242.009C33.592 235.278 46.285 210.884 48 200.009C49.715 189.134 52.915 165.325 52.915 165.325C52.915 165.325 40.82 181.337 37.702 182.072C34.584 182.806 37.547 187.081 33 188.009C28.453 188.937 25.051 184.73 25 181.009C24.949 177.288 26.963 173.562 26 172.009C25.037 170.456 19.597 161.896 20.565 155.009Z" fill="#3E27E0"/>
<path data-part-name ="right forearm back" fillRule="evenodd" clipRule="evenodd" d="M186.917 165.791C186.768 169.296 187.668 210.882 202.268 236.009C206.99 244.136 209 261.009 209 261.009C211.041 263.458 227.383 262.626 231 259.009C231 259.009 228.099 246.464 228 233.009C227.901 219.554 229.04 188.06 227 179.009C224.96 169.958 220.17 154.719 220.163 144.009C220.163 144.009 219.171 165.741 209.959 174.009C209.959 174.009 213.248 184.934 206.011 188.005C206.004 188.007 205.997 188.01 205.99 188.012C205.982 188.015 205.969 188.018 205.952 188.024C204.145 188.573 202.183 188.205 200.697 187.039C199.211 185.872 198.389 184.053 198.495 182.167C198.496 182.144 198.497 182.126 198.498 182.111C198.499 182.086 198.491 182.061 198.474 182.041C197.869 181.32 186.68 167.961 186.917 165.791Z" fill="#3E27E0"/>
<path data-part-name ="left upper leg back" fillRule="evenodd" clipRule="evenodd" d="M63.276 251.211C63.276 251.211 51.005 273.208 53 329.009C54.995 384.81 66.304 390.403 68 417.009C69.696 443.615 70 444.009 70 444.009C70 444.009 79.353 412.017 79 404.009C79 404.009 86.466 421.031 96 435.009C96.576 435.853 108 457.009 108 457.009C108 457.009 114.749 405.32 113 389.009C111.251 372.698 114.334 366.402 116 355.009C117.666 343.616 119.592 312.309 112.962 303.051C112.962 303.051 80.96 316.351 75.47 313.411C69.98 310.472 62.069 273.566 63.276 251.211Z" fill="#F75DFC"/>
<path data-part-name ="right upper leg back" fillRule="evenodd" clipRule="evenodd" d="M173.514 251.211C173.514 251.211 184.563 273.184 187.447 329.009C190.017 378.753 178.004 390.472 175.447 417.009C173.751 434.615 174.223 445.009 174.223 445.009C174.223 445.009 161.094 420.017 161.447 412.009C161.447 412.009 151.788 431.299 143.447 445.009C139.588 451.351 137.447 459.009 137.447 459.009C135.583 454.304 128.796 410.744 129.447 393.009C130.082 375.708 126.113 366.402 124.447 355.009C122.781 343.616 120.217 320.783 122.847 308.525C122.847 308.525 128.287 318.022 151.514 318.014C170.004 318.008 170.722 267.566 173.514 251.211Z" fill="#F75DFC"/>
<path data-part-name ="left dorsal back" fillRule="evenodd" clipRule="evenodd" d="M59 117.009C59.373 130.597 55.766 143.935 66 162.009C70.753 170.403 72.18 184.565 74.655 196.124C77.511 209.456 81.101 219.986 82 225.009C82 225.009 92.046 222.166 91 207.009C89.954 191.852 109.843 172.734 116 171.009C116 171.009 113.8 162.168 108.577 152.837C101.518 140.227 89.593 126.07 86.648 115.115C86.648 115.115 69.212 121.87 59 117.009Z" fill="#B9013E"/>
<path data-part-name ="left triceps back" fillRule="evenodd" clipRule="evenodd" d="M43 83.0088C34.611 87.8978 30.776 100.311 27 108.009C23.224 115.707 23.046 133.073 21 150.009C18.954 166.945 24.725 169.299 26 172.009C26 172.009 20.967 133.924 36 123.009C36 123.009 38.05 127.393 37.145 134.506C35.582 146.798 31.155 165.253 35 169.009C41.07 174.938 37.887 179.211 37 181.009C36.113 182.807 39.635 181.987 40 181.009C40.661 179.237 52.126 169.055 53 165.009C53.874 160.963 58.402 131.977 59 117.009C59 117.009 55.524 102.646 56 93.0088C56 93.0088 52.157 82.5758 43 83.0088Z" fill="#C234D8"/>
<path data-part-name ="right triceps back" fillRule="evenodd" clipRule="evenodd" d="M193.959 83.0088C200.444 83.0088 212.183 101.311 215.959 109.009C219.735 116.707 220.63 127.086 219.959 144.009C219.005 168.068 211.234 171.299 209.959 174.009C209.959 174.009 215.992 133.924 200.959 123.009C200.959 123.009 198.909 127.393 199.814 134.506C201.377 146.798 205.804 165.253 201.959 169.009C195.889 174.938 199.072 179.211 199.959 181.009C200.846 182.807 197.324 181.987 196.959 181.009C196.298 179.237 187.833 170.055 186.959 166.009C186.493 163.853 186.96 158.035 186.472 151.739C186.045 146.22 184.384 146.289 184.374 133.573C184.363 120.856 188.435 109.646 187.959 100.009C187.959 100.009 187.474 83.0088 193.959 83.0088Z" fill="#C234D8"/>
<path data-part-name ="right dorsal back" fillRule="evenodd" clipRule="evenodd" d="M186.356 117.024C188.544 131.365 185.227 145.601 178.124 165.009C174.502 174.908 174.944 183.565 172.469 195.124C169.613 208.456 159.023 219.986 158.124 225.009C158.124 225.009 150.078 222.166 151.124 207.009C152.17 191.852 132.281 172.734 126.124 171.009C126.124 171.009 128.324 162.168 133.547 152.837C140.606 140.227 152.531 126.07 155.476 115.115C155.476 115.115 176.144 121.885 186.356 117.024Z" fill="#B9013E"/>
<path data-part-name ="trap back" fillRule="evenodd" clipRule="evenodd" d="M121.503 177.009C124.291 161.631 154.037 127.807 156.006 117.009C156.939 111.891 159.662 98.4968 160.164 86.8708C160.721 73.9658 159.006 63.0088 159.006 63.0088C168.157 61.8368 189.006 47.0088 189.006 47.0088C184.644 46.2338 176.545 45.0968 164.061 42.1588C157.741 40.6708 151.515 37.6598 145.006 31.0088C128.201 13.8388 131.006 1.00878 131.006 1.00878C125.403 -0.11522 124.959 -0.00422044 121.503 0.00877956C118.047 -0.00422044 117.603 -0.11522 112 1.00878C112 1.00878 115.805 14.8388 99 32.0088C92.491 38.6598 84.941 41.6688 78.945 44.1588C69.461 48.0968 62.362 49.2338 58 50.0088C58 50.0088 74.849 61.8368 84 63.0088C84 63.0088 82.285 73.9658 82.843 86.8708C83.344 98.4968 86.067 111.891 87 117.009C88.969 127.807 118.715 161.631 121.503 177.009Z" fill="#5439DD"/>
</g>
<defs>
<clipPath id="clip0_144_99">
<rect width="231" height="530" fill="white"/>
</clipPath>
</defs>
</svg>)
}
