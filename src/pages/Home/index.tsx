import { ConnectButton, ConnectDialog, useConnect } from '@connect2ic/react';

import './index.css';

export default function Home(props: any) {
  const { isConnected, principal, activeProvider } = useConnect({
    onConnect: () => {
      console.log('sign in', isConnected, activeProvider, principal);
    },
    onDisconnect: () => {
      console.log('sign out', isConnected, activeProvider, principal);
    },
  });

  return (
    <>
      <div className="container mx-10">
        <div className="home">
          <div className="top-nav">
            <div className="left">
              <div className="dfinity-social">
                <div className="clip-path-group">
                  <svg className="clip-0-2216-168"></svg>

                  <svg
                    className="group"
                    width="107"
                    height="64"
                    viewBox="0 0 107 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M53.3333 63.8222C82.6249 63.8222 106.37 49.5749 106.37 32C106.37 14.425 82.6249 0.177734 53.3333 0.177734C24.0418 0.177734 0.296295 14.425 0.296295 32C0.296295 49.5749 24.0418 63.8222 53.3333 63.8222Z"
                      fill="white"
                      stroke="#DDDDDE"
                    />
                    <path
                      d="M71.1834 22.3999C67.3274 22.3999 63.1248 23.5854 58.682 25.9204C56.5746 27.0268 54.7544 28.2123 53.3893 29.1606C53.3893 29.1606 53.3893 29.1606 53.4014 29.1678V29.1606C53.4014 29.1606 55.5568 30.5688 57.9396 32.0776C59.2209 31.1652 61.0649 29.9222 63.1846 28.8014C67.136 26.7251 69.7102 26.2868 71.1834 26.2868C76.7277 26.2868 81.2296 28.9236 81.2296 32.1638C81.2296 35.3825 76.7153 38.0195 71.1834 38.0408C70.9316 38.0408 70.6086 38.0195 70.2015 37.969C71.8181 38.3857 73.5544 38.6875 75.2065 38.6875C85.3612 38.6875 87.3487 34.7144 87.4803 34.427C87.7796 33.7013 87.9354 32.9398 87.9354 32.1566C87.9354 26.7825 80.4154 22.3999 71.1834 22.3999Z"
                      fill="url(#paint0_linear_6_32874)"
                    />
                    <path
                      d="M35.7151 41.9424C39.5709 41.9424 43.7739 40.7566 48.2164 38.4217C50.3238 37.3152 52.144 36.1298 53.509 35.1815C53.509 35.1815 53.509 35.1815 53.4971 35.1743V35.1815C53.4971 35.1815 51.3417 33.7733 48.9588 32.2645C47.6775 33.177 45.8335 34.4199 43.714 35.5407C39.7625 37.6171 37.188 38.0555 35.7151 38.0555C30.171 38.048 25.6686 35.4114 25.6686 32.1711C25.6686 28.9524 30.1829 26.3157 35.7151 26.2941C35.9666 26.2941 36.2899 26.3157 36.697 26.3659C35.0805 25.9492 33.3442 25.6475 31.6917 25.6475C21.5375 25.6475 19.5616 29.6206 19.418 29.9008C19.1186 30.6336 18.963 31.388 18.963 32.1711C18.963 37.5595 26.4829 41.9424 35.7151 41.9424Z"
                      fill="url(#paint1_linear_6_32874)"
                    />
                    <path
                      d="M75.1828 38.6011C69.9858 38.5222 64.5855 36.065 63.4838 35.4544C60.6341 33.8738 54.0599 29.5989 53.545 29.2612C48.7313 26.021 42.2053 22.3999 35.7151 22.3999H35.7032H35.6912C27.812 22.4214 21.1902 25.6258 19.418 29.9007C19.5497 29.6205 22.1481 25.5683 31.6798 25.712C36.8767 25.791 42.301 28.2841 43.4147 28.8948C46.2646 30.4754 52.8385 34.7503 53.3534 35.088C58.1671 38.321 64.6933 41.9419 71.1834 41.9419H71.1953H71.2071C79.0862 41.9206 85.7203 38.7163 87.4803 34.4414C87.3369 34.7215 84.7265 38.7377 75.1828 38.6011Z"
                      fill="#29ABE2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_6_32874"
                        x1="62.4628"
                        y1="23.6884"
                        x2="74.3264"
                        y2="44.1633"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.21" stop-color="#F15A24" />
                        <stop offset="0.6841" stop-color="#FBB03B" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_6_32874"
                        x1="44.4355"
                        y1="40.6539"
                        x2="32.5722"
                        y2="20.179"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.21" stop-color="#ED1E79" />
                        <stop offset="0.8929" stop-color="#522785" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="input-no-label">
                <div className="input-no-label2">
                  <div className="search">
                    <svg
                      className="group2"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.3807 1.83804C12.5577 3.01507 13.2189 4.61146 13.2189 6.27604C13.2189 7.94061 12.5577 9.537 11.3807 10.714C10.2036 11.8911 8.60723 12.5523 6.94266 12.5523C5.27809 12.5523 3.68169 11.8911 2.50466 10.714C1.32763 9.537 0.666382 7.94061 0.666382 6.27604C0.666382 4.61146 1.32763 3.01507 2.50466 1.83804C3.68169 0.661005 5.27809 -0.000244141 6.94266 -0.000244141C8.60723 -0.000244141 10.2036 0.661005 11.3807 1.83804"
                        stroke="#0A0A0A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.6666 14.0001L11.3766 10.7101"
                        stroke="#0A0A0A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="label">Search something</div>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="list-item-default">
                <div className="left2">
                  <svg
                    className="gn-coin"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.8334" cy="19.1666" r="17" fill="#E5855D" stroke="#0A0A0A" />
                    <path
                      d="M14.447 27.0789L14.4465 27.0785C13.3824 26.0624 12.5635 24.7248 11.9772 23.0867M14.447 27.0789L11.9772 23.0867M14.447 27.0789C15.6639 28.2379 17.078 28.8333 18.6713 28.8333H19.3717H19.8717V28.3333V10V9.5H19.3717H18.3345C17.5096 9.5 16.747 9.6296 16.0532 9.8972L16.0532 9.89719L16.0498 9.89853C14.7149 10.4247 13.6416 11.3322 12.8343 12.6008L12.8339 12.6014C11.7191 14.3586 11.1666 16.3614 11.1666 18.5942C11.1666 20.084 11.4385 21.5823 11.9772 23.0867M14.447 27.0789L12.4479 22.9182L11.9772 23.0867M22.0658 9.5H21.5658V10V12.977C21.5658 13.9483 21.9224 14.7812 22.6258 15.4426L22.6261 15.4429C23.4832 16.2477 24.6682 16.6156 26.107 16.6156H28.8011H29.3011V16.1156V10V9.5H28.8011H22.0658ZM21.3654 19.2661H20.8654V19.7661V28.3333V28.8333H21.3654H22.3218C24.6712 28.8333 26.4759 28.4285 27.6177 27.5118C28.7843 26.5862 29.3011 25.0468 29.3011 23.0529V19.7661V19.2661H28.8011H21.3654Z"
                      stroke="#0A0A0A"
                    />
                  </svg>

                  <div className="text">
                    <div className="description">NS Token</div>

                    <div className="title">0.00</div>
                  </div>
                </div>
              </div>

              <div className="group-btn">
                <div className="button-icon">
                  <svg
                    className="bell-notification"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.6014 20H10.4014"
                      stroke="#0A0A0A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.0013 10.032V10C17.0013 8.67392 16.4746 7.40215 15.5369 6.46447C14.5992 5.52678 13.3274 5 12.0013 5C10.6753 5 9.40348 5.52678 8.4658 6.46447C7.52812 7.40215 7.00133 8.67392 7.00133 10V12.504C7.00126 12.6626 6.95707 12.818 6.87372 12.953C6.79036 13.0879 6.67112 13.197 6.52933 13.268L6.02633 13.519C5.65238 13.7056 5.35243 14.013 5.17513 14.3914C4.99783 14.7698 4.95358 15.1971 5.04956 15.6038C5.14554 16.0105 5.37612 16.3729 5.7039 16.6322C6.03168 16.8914 6.43743 17.0323 6.85533 17.032H17.1473C17.3975 17.1572 17.6728 17.2241 17.9525 17.2278C18.2322 17.2315 18.5091 17.1719 18.7625 17.0534C19.0159 16.9348 19.2392 16.7605 19.4157 16.5434C19.5921 16.3264 19.7171 16.0722 19.7814 15.7999C19.8457 15.5277 19.8475 15.2444 19.7867 14.9713C19.726 14.6983 19.6042 14.4425 19.4306 14.2232C19.2569 14.0038 19.0359 13.8267 18.7841 13.7049C18.5322 13.5831 18.2561 13.5199 17.9763 13.52L17.4733 13.269C17.3315 13.1977 17.2123 13.0884 17.129 12.9533C17.0456 12.8183 17.0015 12.6627 17.0013 12.504V10.032V10.032Z"
                      stroke="#0A0A0A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="button">
                  <ConnectButton />
                  <ConnectDialog />

                  {/* <div className="wallet">
                    <div className="group3">
                      <svg
                        className="group4"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.0949 13.125C16.8879 13.126 16.7209 13.294 16.7209 13.501C16.7209 13.708 16.8889 13.876 17.0959 13.875C17.3029 13.875 17.4709 13.707 17.4709 13.5C17.4709 13.293 17.3029 13.125 17.0949 13.125"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5 5V18.5C3.5 19.605 4.395 20.5 5.5 20.5H19.5C20.605 20.5 21.5 19.605 21.5 18.5V8.5C21.5 7.395 20.605 6.5 19.5 6.5H5C4.172 6.5 3.5 5.828 3.5 5V5C3.5 4.172 4.172 3.5 5 3.5H17.5"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text2">Wallets</div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="left-menu">
            <div className="menu">
              <div className="menu-items">
                <div className="feed-select">
                  <div className="rectangle-9"></div>

                  <div className="group3">
                    <svg
                      className="vector10"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.45802 1.74996C1.89524 1.74996 2.24968 1.39552 2.24968 0.958293C2.24968 0.521067 1.89524 0.166626 1.45802 0.166626C1.02079 0.166626 0.666351 0.521067 0.666351 0.958293C0.666351 1.39552 1.02079 1.74996 1.45802 1.74996Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector11"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.08302 1.74996C1.52024 1.74996 1.87468 1.39552 1.87468 0.958293C1.87468 0.521067 1.52024 0.166626 1.08302 0.166626C0.645793 0.166626 0.291351 0.521067 0.291351 0.958293C0.291351 1.39552 0.645793 1.74996 1.08302 1.74996Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector12"
                      width="38"
                      height="37"
                      viewBox="0 0 38 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M38 36.4167H0V6.33333H1.58333V34.8333H36.4167V1.58333H1.58333V3.16667H28.5V4.75H0V0H38V36.4167Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector13"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.833018 1.74996C1.27024 1.74996 1.62468 1.39552 1.62468 0.958293C1.62468 0.521067 1.27024 0.166626 0.833018 0.166626C0.395793 0.166626 0.0413513 0.521067 0.0413513 0.958293C0.0413513 1.39552 0.395793 1.74996 0.833018 1.74996Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="group5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.0833 12.9L2.06663 6.88328C1.35413 6.17078 0.958298 5.22078 0.958298 4.19162C0.958298 3.16245 1.35413 2.21245 2.06663 1.49995C3.5708 -0.00421551 6.02496 -0.00421551 7.52913 1.49995L8.0833 2.05412L8.63746 1.49995C9.34996 0.787451 10.3 0.391618 11.3291 0.391618C12.3583 0.391618 13.3083 0.787451 14.0208 1.49995C14.7333 2.21245 15.1291 3.16245 15.1291 4.19162C15.1291 5.22078 14.7333 6.17078 14.0208 6.88328L8.0833 12.9ZM4.7583 1.97495C4.20413 1.97495 3.5708 2.21245 3.17496 2.60828C2.77913 3.00412 2.54163 3.63745 2.54163 4.19162C2.54163 4.82495 2.77913 5.37912 3.17496 5.77495L8.0833 10.6833L12.9916 5.77495C13.3875 5.37912 13.625 4.74578 13.625 4.19162C13.625 3.55828 13.3875 3.00412 12.9916 2.60828C12.5958 2.21245 11.9625 1.97495 11.4083 1.97495C10.775 1.97495 10.2208 2.21245 9.82496 2.60828L8.0833 4.27078L6.4208 2.60828C5.9458 2.13328 5.39163 1.97495 4.7583 1.97495Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="group6"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.9167 14.5834C3.95837 14.5834 0.791702 11.4167 0.791702 7.45837C0.791702 3.50004 3.95837 0.333374 7.9167 0.333374C11.875 0.333374 15.0417 3.50004 15.0417 7.45837C15.0417 11.4167 11.875 14.5834 7.9167 14.5834ZM7.9167 1.91671C4.8292 1.91671 2.37504 4.37087 2.37504 7.45837C2.37504 10.5459 4.8292 13 7.9167 13C11.0042 13 13.4584 10.5459 13.4584 7.45837C13.4584 4.37087 11.0042 1.91671 7.9167 1.91671Z"
                        fill="#0A0A0A"
                      />
                      <path d="M5.5417 5.08337H7.12504V6.66671H5.5417V5.08337Z" fill="#0A0A0A" />
                      <path d="M8.70805 5.08337H10.2914V6.66671H8.70805V5.08337Z" fill="#0A0A0A" />
                      <path
                        d="M7.91639 11.4167C5.69972 11.4167 3.95805 9.67508 3.95805 7.45841C3.95805 6.98341 4.27472 6.66675 4.74972 6.66675C5.22472 6.66675 5.54139 6.98341 5.54139 7.45841C5.54139 8.80425 6.57055 9.83341 7.91639 9.83341C9.26222 9.83341 10.2914 8.80425 10.2914 7.45841C10.2914 6.98341 10.6081 6.66675 11.0831 6.66675C11.5581 6.66675 11.8747 6.98341 11.8747 7.45841C11.8747 9.67508 10.1331 11.4167 7.91639 11.4167Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <div className="group7">
                      <svg
                        className="vector19"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 15.0416C4.04167 15.0416 0.875 11.875 0.875 7.91663C0.875 3.95829 4.04167 0.791626 8 0.791626C11.9583 0.791626 15.125 3.95829 15.125 7.91663C15.125 11.875 11.9583 15.0416 8 15.0416ZM8 2.37496C4.9125 2.37496 2.45833 4.82913 2.45833 7.91663C2.45833 11.0041 4.9125 13.4583 8 13.4583C11.0875 13.4583 13.5417 11.0041 13.5417 7.91663C13.5417 4.82913 11.0875 2.37496 8 2.37496Z"
                          fill="#0A0A0A"
                        />
                      </svg>

                      <svg
                        className="vector20"
                        width="3"
                        height="3"
                        viewBox="0 0 3 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.625 0.541626H2.20833V2.12496H0.625V0.541626Z" fill="#0A0A0A" />
                      </svg>

                      <svg
                        className="vector21"
                        width="3"
                        height="3"
                        viewBox="0 0 3 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.791351 0.541626H2.37468V2.12496H0.791351V0.541626Z" fill="#0A0A0A" />
                      </svg>

                      <svg
                        className="group8"
                        width="8"
                        height="3"
                        viewBox="0 0 8 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833298 0.708252H7.16663V2.29159H0.833298V0.708252Z" fill="#0A0A0A" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="feed">Feed</div>
              </div>

              <div className="menu-items">
                <div className="daily-task-default">
                  <svg
                    className="group9"
                    width="29"
                    height="40"
                    viewBox="0 0 29 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.8333 5.83337V0.833374H9.83334V3.33337"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M7.33334 5.83333H4.00001V35.8333H25.7017L25.6667 5.83333H9.83334V2.5H0.666672V39.1667H29V2.5H22.3333"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12.3333 11.6667L14 13.3333L17.3333 10"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.3333 17.5H17.3333V22.5H12.3333V17.5Z"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.3333 25.8334H17.3333V30.8334H12.3333V25.8334Z"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="daily-task">Daily Task</div>
              </div>

              <div className="menu-items">
                <div className="stake-default">
                  <div className="group3">
                    <svg
                      className="vector28"
                      width="4"
                      height="12"
                      viewBox="0 0 4 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.16667 11.1667H0.5V0.333374H3.83333V2.00004H2.16667V11.1667Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector29"
                      width="4"
                      height="12"
                      viewBox="0 0 4 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.50001 11.1667H1.83334V2.00004H0.166672V0.333374H3.50001V11.1667Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector30"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 5.16663H3.83333V1.83329H2.16667V5.16663H0.5V0.166626H5.5V5.16663Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector31"
                      width="2"
                      height="3"
                      viewBox="0 0 2 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.333328 0.666626H1.99999V2.33329H0.333328V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector32"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.333328 0H1.99999V1.66667H0.333328V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector33"
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.666672 0.666626H2.33334V2.33329H0.666672V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector34"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.666672 0H2.33334V1.66667H0.666672V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector35"
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.666672 0.666626H2.33334V2.33329H0.666672V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector36"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.666672 0H2.33334V1.66667H0.666672V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector37"
                      width="2"
                      height="3"
                      viewBox="0 0 2 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.666626H1.66667V2.33329H0V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector38"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H1.66667V1.66667H0V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector39"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0.333374H2.16667V2.00004H0.5V0.333374Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector40"
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0.666626H2.16667V2.33329H0.5V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector41"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833328 0.333374H2.49999V2.00004H0.833328V0.333374Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector42"
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833328 0.666626H2.49999V2.33329H0.833328V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector43"
                      width="40"
                      height="2"
                      viewBox="0 0 40 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.333374H40V2.00004H0V0.333374Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector44"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0H2.16667V1.66667H0.5V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector45"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833328 0H2.49999V1.66667H0.833328V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector46"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833328 0H2.49999V1.66667H0.833328V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector47"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166672 0H1.83334V1.66667H0.166672V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector48"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166672 0H1.83334V1.66667H0.166672V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector49"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0H2.16667V1.66667H0.5V0Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector50"
                      width="26"
                      height="19"
                      viewBox="0 0 26 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.8333 18.1666H17.1667V7.33329H23.8333V2.33329H2.16667V7.33329H8.83333V18.1666H7.16667V8.99996H0.5V0.666626H25.5V8.99996H18.8333V18.1666Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector51"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.16666 5.66663C1.75 5.66663 0.666664 4.58329 0.666664 3.16663C0.666664 1.74996 1.75 0.666626 3.16666 0.666626C4.58333 0.666626 5.66666 1.74996 5.66666 3.16663C5.66666 4.58329 4.58333 5.66663 3.16666 5.66663ZM3.16666 2.33329C2.66666 2.33329 2.33333 2.66663 2.33333 3.16663C2.33333 3.66663 2.66666 3.99996 3.16666 3.99996C3.66666 3.99996 4 3.66663 4 3.16663C4 2.66663 3.66666 2.33329 3.16666 2.33329Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector52"
                      width="2"
                      height="4"
                      viewBox="0 0 2 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.333336 0.666626H2V3.99996H0.333336V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector53"
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.333336 0.333374H2V2.00004H0.333336V0.333374Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector54"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.83333 7.00004H4.66667C2.33333 7.00004 0.5 5.16671 0.5 2.83337V0.333374H4.66667C7 0.333374 8.83333 2.16671 8.83333 4.50004V7.00004ZM2.16667 2.00004V2.83337C2.16667 4.25004 3.25 5.33337 4.66667 5.33337H7.16667V4.50004C7.16667 3.08337 6.08333 2.00004 4.66667 2.00004H2.16667Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector55"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.33334 7.00004H0.166672V4.50004C0.166672 2.16671 2.00001 0.333374 4.33334 0.333374H8.5V2.83337C8.5 5.16671 6.66667 7.00004 4.33334 7.00004ZM1.83334 5.33337H4.33334C5.75 5.33337 6.83334 4.25004 6.83334 2.83337V2.00004H4.33334C2.91667 2.00004 1.83334 3.08337 1.83334 4.50004V5.33337Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector56"
                      width="2"
                      height="13"
                      viewBox="0 0 2 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.166672 0.833374H1.83334V12.5H0.166672V0.833374Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="vector57"
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.6667 11.6667H0.333328V0H23.6667V11.6667ZM1.99999 10H22V1.66667H1.99999V10Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="vector58"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.00001 7.16667C2.16667 7.16667 0.666672 5.66667 0.666672 3.83333C0.666672 2 2.16667 0.5 4.00001 0.5C5.83334 0.5 7.33334 2 7.33334 3.83333C7.33334 5.66667 5.83334 7.16667 4.00001 7.16667ZM4.00001 2.16667C3.08334 2.16667 2.33334 2.91667 2.33334 3.83333C2.33334 4.75 3.08334 5.5 4.00001 5.5C4.91667 5.5 5.66667 4.75 5.66667 3.83333C5.66667 2.91667 4.91667 2.16667 4.00001 2.16667Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="group10"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.66667 5.66663C1.25001 5.66663 0.166672 4.58329 0.166672 3.16663C0.166672 1.74996 1.25001 0.666626 2.66667 0.666626C4.08334 0.666626 5.16667 1.74996 5.16667 3.16663C5.16667 4.58329 4.08334 5.66663 2.66667 5.66663ZM2.66667 2.33329C2.16667 2.33329 1.83334 2.66663 1.83334 3.16663C1.83334 3.66663 2.16667 3.99996 2.66667 3.99996C3.16667 3.99996 3.50001 3.66663 3.50001 3.16663C3.50001 2.66663 3.16667 2.33329 2.66667 2.33329Z"
                        fill="#0A0A0A"
                      />
                    </svg>

                    <svg
                      className="group11"
                      width="3"
                      height="4"
                      viewBox="0 0 3 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833328 0.666626H2.49999V3.99996H0.833328V0.666626Z" fill="#0A0A0A" />
                    </svg>

                    <svg
                      className="group12"
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833328 0.333374H2.49999V2.00004H0.833328V0.333374Z" fill="#0A0A0A" />
                    </svg>
                  </div>
                </div>

                <div className="stake">Stake</div>
              </div>

              <div className="menu-items">
                <div className="account-default">
                  <svg
                    className="group13"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.1158 16.9067C25.1242 16.9067 25.9417 15.8848 25.9417 14.6242C25.9417 13.3636 25.1242 12.3417 24.1158 12.3417C23.1074 12.3417 22.29 13.3636 22.29 14.6242C22.29 15.8848 23.1074 16.9067 24.1158 16.9067Z"
                      fill="#0A0A0A"
                    />
                    <path
                      d="M12.5508 16.9067C13.5592 16.9067 14.3767 15.8848 14.3767 14.6242C14.3767 13.3636 13.5592 12.3417 12.5508 12.3417C11.5425 12.3417 10.725 13.3636 10.725 14.6242C10.725 15.8848 11.5425 16.9067 12.5508 16.9067Z"
                      fill="#0A0A0A"
                    />
                    <path
                      d="M18.3333 36.6667C14.7073 36.6667 11.1628 35.5914 8.14788 33.577C5.13298 31.5625 2.78315 28.6992 1.39554 25.3492C0.00793598 21.9992 -0.355125 18.313 0.35227 14.7567C1.05967 11.2004 2.80575 7.93368 5.36971 5.36972C7.93367 2.80575 11.2004 1.05967 14.7567 0.352278C18.313 -0.355118 21.9992 0.00794361 25.3492 1.39555C28.6992 2.78316 31.5625 5.13299 33.5769 8.14789C35.5914 11.1628 36.6667 14.7073 36.6667 18.3333C36.6667 18.5544 36.5789 18.7663 36.4226 18.9226C36.2663 19.0789 36.0543 19.1667 35.8333 19.1667C35.6123 19.1667 35.4004 19.0789 35.2441 18.9226C35.0878 18.7663 35 18.5544 35 18.3333C35 15.037 34.0225 11.8147 32.1912 9.07384C30.3598 6.33302 27.7568 4.19681 24.7114 2.93535C21.666 1.67389 18.3148 1.34383 15.0818 1.98692C11.8488 2.63001 8.8791 4.21735 6.54822 6.54823C4.21735 8.8791 2.63 11.8488 1.98691 15.0818C1.34383 18.3149 1.67388 21.666 2.93534 24.7114C4.1968 27.7568 6.33301 30.3598 9.07383 32.1912C11.8146 34.0225 15.037 35 18.3333 35C18.5543 35 18.7663 35.0878 18.9226 35.2441C19.0789 35.4004 19.1667 35.6123 19.1667 35.8333C19.1667 36.0544 19.0789 36.2663 18.9226 36.4226C18.7663 36.5789 18.5543 36.6667 18.3333 36.6667Z"
                      fill="#0A0A0A"
                    />
                    <path
                      d="M20.7608 36.5217C21.181 36.5217 21.5217 36.181 21.5217 35.7608C21.5217 35.3406 21.181 35 20.7608 35C20.3406 35 20 35.3406 20 35.7608C20 36.181 20.3406 36.5217 20.7608 36.5217Z"
                      fill="#0A0A0A"
                    />
                    <path
                      d="M18.3333 25.2542C16.8154 25.2565 15.3169 24.9133 13.9514 24.2506C12.5858 23.5879 11.389 22.6231 10.4517 21.4292C10.3798 21.3438 10.3258 21.2449 10.2929 21.1383C10.26 21.0316 10.2488 20.9195 10.26 20.8085C10.2713 20.6974 10.3047 20.5898 10.3583 20.4919C10.4119 20.3941 10.4847 20.308 10.5722 20.2388C10.6597 20.1696 10.7603 20.1186 10.8679 20.089C10.9754 20.0594 11.0879 20.0516 11.1985 20.0663C11.3091 20.0809 11.4157 20.1177 11.5119 20.1743C11.608 20.2309 11.6918 20.3062 11.7583 20.3958C12.5416 21.3904 13.5402 22.1943 14.6791 22.747C15.818 23.2998 17.0674 23.5869 18.3333 23.5869C19.5993 23.5869 20.8487 23.2998 21.9876 22.747C23.1264 22.1943 24.1251 21.3904 24.9083 20.3958C24.9748 20.3062 25.0586 20.2309 25.1548 20.1743C25.251 20.1177 25.3575 20.0809 25.4682 20.0663C25.5788 20.0516 25.6912 20.0594 25.7988 20.089C25.9064 20.1186 26.0069 20.1696 26.0945 20.2388C26.182 20.308 26.2547 20.3941 26.3083 20.4919C26.362 20.5898 26.3954 20.6974 26.4066 20.8085C26.4179 20.9195 26.4067 21.0316 26.3738 21.1383C26.3409 21.2449 26.2869 21.3438 26.215 21.4292C25.2777 22.6232 24.081 23.5882 22.7154 24.2511C21.3498 24.9139 19.8513 25.2573 18.3333 25.255V25.2542Z"
                      fill="#0A0A0A"
                    />
                    <path
                      d="M33.2508 39.9999H30.0833L29.4283 38.1583L28.6617 37.8399L26.895 38.6791L24.655 36.4391L25.4942 34.6724L25.1767 33.9058L23.3333 33.2508V30.0833L25.175 29.4283L25.4933 28.6616L24.6542 26.8949L26.8942 24.6549L28.6608 25.4941L29.4275 25.1766L30.0825 23.3341H33.25L33.905 25.1758L34.6717 25.4941L36.4383 24.6549L38.6783 26.8949L37.8392 28.6616L38.1567 29.4283L39.9992 30.0833V33.2499L38.1575 33.9049L37.8392 34.6716L38.6783 36.4383L36.4383 38.6783L34.6717 37.8391L33.905 38.1566L33.2508 39.9999ZM31.2592 38.3333H32.0742L32.585 36.9008L34.7192 36.0174L36.0925 36.6691L36.6692 36.0924L36.0175 34.7191L36.9008 32.5849L38.3333 32.0741V31.2591L36.9008 30.7483L36.0175 28.6141L36.6692 27.2408L36.0925 26.6641L34.7192 27.3158L32.585 26.4324L32.0742 24.9999H31.2592L30.7483 26.4324L28.6142 27.3158L27.2408 26.6641L26.6642 27.2408L27.3158 28.6141L26.4325 30.7483L25 31.2591V32.0741L26.4325 32.5849L27.3158 34.7191L26.6642 36.0924L27.2408 36.6691L28.6142 36.0174L30.7483 36.9008L31.2592 38.3333Z"
                      fill="#0A0A0A"
                    />
                    <path
                      d="M31.6667 35C31.0075 34.9999 30.3632 34.8043 29.8151 34.438C29.2671 34.0717 28.84 33.5512 28.5877 32.9422C28.3355 32.3332 28.2695 31.6631 28.3981 31.0166C28.5266 30.3701 28.844 29.7762 29.31 29.31C29.9448 28.7036 30.7888 28.3652 31.6667 28.3652C32.5445 28.3652 33.3886 28.7036 34.0233 29.31C34.3329 29.6195 34.5784 29.9869 34.7459 30.3912C34.9134 30.7956 34.9996 31.229 34.9996 31.6667C34.9996 32.1044 34.9134 32.5378 34.7459 32.9421C34.5784 33.3465 34.3329 33.7139 34.0233 34.0233C33.7147 34.334 33.3474 34.5802 32.9429 34.7479C32.5384 34.9155 32.1046 35.0012 31.6667 35ZM31.6667 30C31.3371 30.0001 31.0149 30.0979 30.7409 30.281C30.4669 30.4641 30.2533 30.7244 30.1272 31.0289C30.0011 31.3334 29.9681 31.6685 30.0324 31.9917C30.0966 32.315 30.2553 32.6119 30.4883 32.845C30.8057 33.1482 31.2277 33.3174 31.6667 33.3174C32.1056 33.3174 32.5276 33.1482 32.845 32.845C33.078 32.6119 33.2367 32.315 33.301 31.9917C33.3653 31.6685 33.3322 31.3334 33.2061 31.0289C33.08 30.7244 32.8664 30.4641 32.5924 30.281C32.3184 30.0979 31.9963 30.0001 31.6667 30Z"
                      fill="#0A0A0A"
                    />
                    <path
                      d="M35.7608 21.5217C36.181 21.5217 36.5217 21.181 36.5217 20.7608C36.5217 20.3406 36.181 20 35.7608 20C35.3406 20 35 20.3406 35 20.7608C35 21.181 35.3406 21.5217 35.7608 21.5217Z"
                      fill="#0A0A0A"
                    />
                  </svg>
                </div>

                <div className="account">Account</div>
              </div>
            </div>

            <div className="button2">
              <div className="plus-3">
                <svg
                  className="group14"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0V14" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M0 7C4.66667 7 14 7 14 7" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>

              <div className="text2">Post</div>
            </div>
          </div>

          <div className="noti">
            <div className="initialize-your-coin-for-the-best-experience-with-genfi">
              Initialize your coin for the best experience with Genfi.
            </div>

            <div className="initialize-your-coin">Initialize Your Coin</div>
          </div>

          <div className="post">
            <div className="what-s-on-your-mind">What’s on your mind?</div>

            <div className="frame-33">
              <div className="button-text">
                <div className="text3">0.00</div>

                <svg
                  className="gn-coin2"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9.375" cy="8.625" r="7.625" fill="#E5855D" stroke="#0A0A0A" stroke-width="0.5" />
                  <path
                    d="M6.4839 12.2036L6.48366 12.2034C6.00149 11.7429 5.63109 11.1374 5.3662 10.3974M6.4839 12.2036L5.3662 10.3974M6.4839 12.2036C7.03579 12.7292 7.6782 13 8.40209 13H8.7173H8.9673V12.75V4.5V4.25H8.7173H8.25055C7.8767 4.25 7.53041 4.30874 7.21495 4.43042L7.21495 4.43041L7.21325 4.43108C6.60731 4.66992 6.1203 5.08189 5.75437 5.65693L5.75418 5.65722C5.24976 6.45232 5 7.35831 5 8.36738C5 9.04091 5.12294 9.71798 5.3662 10.3974M6.4839 12.2036L5.60158 10.3132L5.3662 10.3974M9.92965 4.25H9.67965V4.5V5.83964C9.67965 6.28356 9.84288 6.66496 10.1645 6.9674L10.1646 6.96751C10.5564 7.33535 11.0966 7.50202 11.7482 7.50202H12.9605H13.2105V7.25202V4.5V4.25H12.9605H9.92965ZM9.61444 8.64475H9.36444V8.89475V12.75V13H9.61444H10.0448C11.1037 13 11.923 12.8178 12.4436 12.3998C12.977 11.9765 13.2105 11.2747 13.2105 10.3738V8.89475V8.64475H12.9605H9.61444Z"
                    stroke="#0A0A0A"
                    stroke-width="0.5"
                  />
                </svg>
              </div>

              <div className="earned-in-last-7-days-from-content-earn-more-by-receiving-like">
                Earned in last 7 days, from content. Earn more by receiving Like!
              </div>
            </div>
          </div>

          <div className="tabs-fill">
            <div className="tabs-fill-item">
              <div className="tab">TOP</div>
            </div>

            <div className="tabs-fill-item2">
              <div className="tab2">MY FEED</div>
            </div>

            <div className="tabs-fill-item2">
              <div className="tab2">ALL</div>
            </div>
          </div>

          <div className="post2">
            <div className="news">
              <div className="info">
                <div className="frame-35">
                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info2">
                    <div className="name">
                      <div className="list-item-list">
                        <div className="title2">Tanisha</div>
                      </div>
                    </div>

                    <div className="time">
                      <div className="content">5 minutes ago</div>

                      <div className="earth-web">
                        <div className="group3">
                          <svg
                            className="group15"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8 2C11.3213 2 14 4.67867 14 8C14 11.3213 11.3213 14 8 14"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 14C4.67867 14 2 11.3213 2 8C2 4.67867 4.67867 2 8 2"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.77868 2.70662C4.85201 5.92329 4.85201 10.0773 6.77868 13.294C7.34268 14.236 8.65801 14.236 9.22201 13.294C11.1487 10.0773 11.1487 5.92329 9.22201 2.70662C8.65735 1.76462 7.34268 1.76462 6.77868 2.70662Z"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.67334 5.23865C5.93467 6.24598 10.0653 6.24598 13.326 5.23865"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.3267 10.7614C10.0653 9.75403 5.93468 9.75403 2.67401 10.7614"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right2">
                  <div className="button3">
                    <svg
                      className="gn-coin3"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12.5" cy="11.5" r="10" fill="#E5855D" stroke="#0A0A0A" />
                      <path
                        d="M8.53026 16.3922L8.52978 16.3917C7.86448 15.7564 7.35808 14.9253 6.99803 13.9195L8.53026 16.3922ZM8.53026 16.3922C9.29459 17.1201 10.1914 17.5 11.2028 17.5H11.6231H12.1231V17V6V5.5H11.6231H11.0007C10.4847 5.5 10.0023 5.58111 9.55996 5.75172L9.55996 5.75171L9.55655 5.75305C8.71376 6.08525 8.03744 6.65864 7.53188 7.45309L7.53151 7.45368M8.53026 16.3922L7.53151 7.45368M7.53151 7.45368C6.84057 8.54278 6.5 9.78226 6.5 11.1565C6.5 12.0752 6.66775 12.9969 6.99802 13.9194L7.53151 7.45368ZM13.2395 5.5H12.7395V6V7.78619C12.7395 8.42348 12.9758 8.97613 13.4385 9.41128L13.4388 9.41152C14.0013 9.93974 14.7679 10.1694 15.6642 10.1694H17.2807H17.7807V9.66936V6V5.5H17.2807H13.2395ZM12.8193 11.3597H12.3193V11.8597V17V17.5H12.8193H13.3931C14.8159 17.5 15.9561 17.2568 16.6955 16.6633C17.4633 16.0538 17.7807 15.057 17.7807 13.8317V11.8597V11.3597H17.2807H12.8193Z"
                        stroke="#0A0A0A"
                      />
                    </svg>

                    <div className="text4">0.24</div>
                  </div>

                  <div className="button-icon2">
                    <div className="dot-more">
                      <svg
                        className="group16"
                        width="14"
                        height="2"
                        viewBox="0 0 14 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.5027 1.00009C13.5027 1.27634 13.2788 1.50029 13.0025 1.50029C12.7263 1.50029 12.5023 1.27634 12.5023 1.00009C12.5023 0.723829 12.7263 0.499878 13.0025 0.499878C13.2788 0.499878 13.5027 0.723829 13.5027 1.00009"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.50017 1.00009C7.50017 1.27634 7.27622 1.50029 6.99996 1.50029C6.72371 1.50029 6.49976 1.27634 6.49976 1.00009C6.49976 0.723829 6.72371 0.499878 6.99996 0.499878C7.27622 0.499878 7.50017 0.723829 7.50017 1.00009"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.49773 1.00009C1.49773 1.27634 1.27378 1.50029 0.997523 1.50029C0.721265 1.50029 0.497314 1.27634 0.497314 1.00009C0.497314 0.723829 0.721265 0.499878 0.997523 0.499878C1.27378 0.499878 1.49773 0.723829 1.49773 1.00009"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content2">A great day when you are confident in yourself!</div>
            </div>

            <div className="image"></div>

            <div className="action">
              <div className="action2">
                <div className="heart">
                  <div className="heart2">
                    <svg
                      className="rectangle-5"
                      width="20"
                      height="8"
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H19.5C17.3333 2.5 12.4 7.5 10 7.5C7.5 7.5 0 0 0 0Z" fill="#E5855D" />
                    </svg>

                    <svg
                      className="heart3"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.928 5.33325C25.1613 5.33325 28 9.30659 28 13.0066C28 20.5173 16.2147 26.6666 16 26.6666C15.7853 26.6666 4 20.5173 4 13.0066C4 9.30659 6.83867 5.33325 11.072 5.33325C13.492 5.33325 15.0813 6.53992 16 7.61459C16.9187 6.53992 18.508 5.33325 20.928 5.33325Z"
                        stroke="#0A0A0A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="_17">17</div>
                </div>

                <svg
                  className="message"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.6666 26.6666V7.70392C26.6666 6.39459 25.6053 5.33325 24.296 5.33325H7.70398C6.39465 5.33325 5.33331 6.39459 5.33331 7.70392V21.9266C5.33331 23.2359 6.39465 24.2973 7.70398 24.2973H22.2226L26.6666 26.6666Z"
                    stroke="#0A0A0A"
                    stroke-width="1.333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9026 14.764C10.9652 14.8266 11.0004 14.9115 11.0004 15C11.0004 15.0885 10.9652 15.1734 10.9026 15.236C10.8716 15.267 10.8349 15.2916 10.7944 15.3084C10.7539 15.3251 10.7105 15.3338 10.6666 15.3338C10.5781 15.3338 10.4932 15.2986 10.4306 15.236C10.368 15.1734 10.3329 15.0885 10.3329 15C10.3329 14.9115 10.368 14.8266 10.4306 14.764C10.4932 14.7014 10.5781 14.6663 10.6666 14.6663C10.7552 14.6663 10.84 14.7014 10.9026 14.764"
                    stroke="#0A0A0A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5698 14.764C16.6323 14.8266 16.6675 14.9115 16.6675 15C16.6675 15.0885 16.6323 15.1734 16.5698 15.236C16.5388 15.267 16.502 15.2916 16.4615 15.3084C16.421 15.3251 16.3776 15.3338 16.3338 15.3338C16.2452 15.3338 16.1603 15.2986 16.0978 15.236C16.0352 15.1734 16 15.0885 16 15C16 14.9115 16.0352 14.8266 16.0978 14.764C16.1603 14.7014 16.2452 14.6663 16.3338 14.6663C16.4223 14.6663 16.5072 14.7014 16.5698 14.764"
                    stroke="#0A0A0A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.9031 14.764C21.9657 14.8266 22.0008 14.9115 22.0008 15C22.0008 15.0885 21.9657 15.1734 21.9031 15.236C21.8721 15.267 21.8353 15.2916 21.7948 15.3084C21.7543 15.3251 21.7109 15.3338 21.6671 15.3338C21.5785 15.3338 21.4937 15.2986 21.4311 15.236C21.3685 15.1734 21.3333 15.0885 21.3333 15C21.3333 14.9115 21.3685 14.8266 21.4311 14.764C21.4937 14.7014 21.5785 14.6663 21.6671 14.6663C21.7556 14.6663 21.8405 14.7014 21.9031 14.764"
                    stroke="#0A0A0A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="email">
                  <svg
                    className="group17"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.7407 10.9999C15.7407 11.9375 15.4627 12.8541 14.9417 13.6337C14.4208 14.4133 13.6804 15.021 12.8142 15.3798C11.9479 15.7386 10.9947 15.8325 10.0751 15.6495C9.15548 15.4666 8.31076 15.0151 7.64776 14.3521C6.98476 13.6891 6.53324 12.8444 6.35032 11.9248C6.1674 11.0052 6.26128 10.052 6.6201 9.1857C6.97891 8.31945 7.58655 7.57905 8.36616 7.05813C9.14577 6.53721 10.0623 6.25917 11 6.25917C12.2573 6.25917 13.4631 6.75864 14.3522 7.6477C15.2412 8.53676 15.7407 9.74258 15.7407 10.9999ZM15.7407 10.9999V12.7777C15.7407 13.5635 16.0529 14.3171 16.6085 14.8728C17.1642 15.4285 17.9178 15.7406 18.7037 15.7406C19.4895 15.7406 20.2431 15.4285 20.7988 14.8728C21.3545 14.3171 21.6666 13.5635 21.6666 12.7777V10.9999C21.6666 8.17093 20.5428 5.45783 18.5424 3.45744C16.542 1.45706 13.8289 0.333252 11 0.333252C8.17099 0.333252 5.45789 1.45706 3.4575 3.45744C1.45712 5.45783 0.333313 8.17093 0.333313 10.9999C0.333309 12.754 0.765906 14.4811 1.59279 16.0281C2.41967 17.5751 3.61531 18.8943 5.0738 19.8689C6.53229 20.8434 8.20862 21.4432 9.9543 21.6152C11.7 21.7872 13.4611 21.526 15.0817 20.8547C15.7866 20.5606 16.4577 20.1915 17.0835 19.7537"
                      stroke="#0A0A0A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="comments">3 comments</div>
            </div>

            <div className="carousel-slick-dot">
              <div className="carousel-slick-dot2">
                <div className="slick-inactive"></div>
              </div>

              <div className="carousel-slick-dot3">
                <div className="slick-active"></div>
              </div>

              <div className="carousel-slick-dot2">
                <div className="slick-inactive"></div>
              </div>

              <div className="carousel-slick-dot2">
                <div className="slick-inactive"></div>
              </div>
            </div>
          </div>

          <div className="topcoin">
            <div className="tab3">
              <div className="tab-new">
                <div className="rectangle-52"></div>

                <div className="price">Price</div>
              </div>

              <div className="tab-new2">
                <div className="price">ARP</div>
              </div>

              <div className="tab-new2">
                <div className="price">Growth</div>
              </div>

              <div className="tab-new2">
                <div className="price">Volume</div>
              </div>

              <div className="tab-new2">
                <div className="price">Followers</div>
              </div>
            </div>

            <div className="top-coin">
              <div className="title3">
                <div className="top-coin-price">Top Coin Price</div>

                <div className="user-coins-with-the-highest-prices-over-the-last-7-days">
                  User coins with the highest prices over the last 7 days
                </div>
              </div>

              <div className="list-topcoin">
                <div className="list-top-coin">
                  <div className="_1">1</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">kathrynmurphy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">5 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Floyd Miles</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">2</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">floydmiles</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">4.152 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Bessie Cooper</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">3</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">theresawebb</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">4.032 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Cameron</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">4</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">janecooper</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">4.009 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Arlene McCoy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">5</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">kathrynmurphy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">3.983 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Arlene McCoy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">6</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">kathrynmurphy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">3.872 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Leslie Alexander</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">7</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">kathrynmurphy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">3.24 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Esther Howard</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">8</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">kathrynmurphy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">2.753 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Esther Howard</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">9</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">kathrynmurphy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">2.642 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Darlene Robertson</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>

                <div className="list-top-coin">
                  <div className="_1">10</div>

                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info3">
                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content3">kathrynmurphy</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content3">2.034 GN</div>
                      </div>
                    </div>

                    <div className="list-basic">
                      <div className="list-item-list2">
                        <div className="content">by Courtney Henry</div>
                      </div>

                      <div className="list-item-list">
                        <div className="content">$5/coin</div>
                      </div>
                    </div>
                  </div>

                  <div className="button4">
                    <div className="text5">Buy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="post3">
            <div className="news">
              <div className="info">
                <div className="frame-35">
                  <div className="avatar">
                    <div className="avatar2"></div>
                  </div>

                  <div className="info2">
                    <div className="name">
                      <div className="list-item-list">
                        <div className="title2">Tanisha</div>
                      </div>
                    </div>

                    <div className="time">
                      <div className="content">5 minutes ago</div>

                      <div className="earth-web">
                        <div className="group3">
                          <svg
                            className="group18"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8 2C11.3213 2 14 4.67867 14 8C14 11.3213 11.3213 14 8 14"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 14C4.67867 14 2 11.3213 2 8C2 4.67867 4.67867 2 8 2"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.77868 2.70674C4.85201 5.92341 4.85201 10.0774 6.77868 13.2941C7.34268 14.2361 8.65801 14.2361 9.22201 13.2941C11.1487 10.0774 11.1487 5.92341 9.22201 2.70674C8.65735 1.76474 7.34268 1.76474 6.77868 2.70674Z"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.67334 5.23877C5.93467 6.2461 10.0653 6.2461 13.326 5.23877"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.3267 10.7614C10.0653 9.75403 5.93468 9.75403 2.67401 10.7614"
                              stroke="#0A0A0A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right2">
                  <div className="button3">
                    <svg
                      className="gn-coin4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12.5" cy="11.5" r="10" fill="#E5855D" stroke="#0A0A0A" />
                      <path
                        d="M8.53026 16.3922L8.52978 16.3917C7.86448 15.7564 7.35808 14.9253 6.99803 13.9195L8.53026 16.3922ZM8.53026 16.3922C9.29459 17.1201 10.1914 17.5 11.2028 17.5H11.6231H12.1231V17V6V5.5H11.6231H11.0007C10.4847 5.5 10.0023 5.58111 9.55996 5.75172L9.55996 5.75171L9.55655 5.75305C8.71376 6.08525 8.03744 6.65864 7.53188 7.45309L7.53151 7.45368M8.53026 16.3922L7.53151 7.45368M7.53151 7.45368C6.84057 8.54278 6.5 9.78226 6.5 11.1565C6.5 12.0752 6.66775 12.9969 6.99802 13.9194L7.53151 7.45368ZM13.2395 5.5H12.7395V6V7.78619C12.7395 8.42348 12.9758 8.97613 13.4385 9.41128L13.4388 9.41152C14.0013 9.93974 14.7679 10.1694 15.6642 10.1694H17.2807H17.7807V9.66936V6V5.5H17.2807H13.2395ZM12.8193 11.3597H12.3193V11.8597V17V17.5H12.8193H13.3931C14.8159 17.5 15.9561 17.2568 16.6955 16.6633C17.4633 16.0538 17.7807 15.057 17.7807 13.8317V11.8597V11.3597H17.2807H12.8193Z"
                        stroke="#0A0A0A"
                      />
                    </svg>

                    <div className="text4">0.24</div>
                  </div>

                  <div className="button-icon2">
                    <div className="dot-more">
                      <svg
                        className="group19"
                        width="14"
                        height="2"
                        viewBox="0 0 14 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.5027 1.00021C13.5027 1.27647 13.2788 1.50042 13.0025 1.50042C12.7263 1.50042 12.5023 1.27647 12.5023 1.00021C12.5023 0.723951 12.7263 0.5 13.0025 0.5C13.2788 0.5 13.5027 0.723951 13.5027 1.00021"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.50017 1.00021C7.50017 1.27647 7.27622 1.50042 6.99996 1.50042C6.72371 1.50042 6.49976 1.27647 6.49976 1.00021C6.49976 0.723951 6.72371 0.5 6.99996 0.5C7.27622 0.5 7.50017 0.723951 7.50017 1.00021"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.49773 1.00021C1.49773 1.27647 1.27378 1.50042 0.997523 1.50042C0.721265 1.50042 0.497314 1.27647 0.497314 1.00021C0.497314 0.723951 0.721265 0.5 0.997523 0.5C1.27378 0.5 1.49773 0.723951 1.49773 1.00021"
                          stroke="#0A0A0A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content2">A great day when you are confident in yourself!</div>
            </div>

            <div className="image"></div>

            <div className="action">
              <div className="action2">
                <div className="heart">
                  <div className="heart2">
                    <svg
                      className="rectangle-53"
                      width="20"
                      height="8"
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H19.5C17.3333 2.5 12.4 7.5 10 7.5C7.5 7.5 0 0 0 0Z" fill="#E5855D" />
                    </svg>

                    <svg
                      className="heart4"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.928 5.33325C25.1613 5.33325 28 9.30659 28 13.0066C28 20.5173 16.2147 26.6666 16 26.6666C15.7853 26.6666 4 20.5173 4 13.0066C4 9.30659 6.83867 5.33325 11.072 5.33325C13.492 5.33325 15.0813 6.53992 16 7.61459C16.9187 6.53992 18.508 5.33325 20.928 5.33325Z"
                        stroke="#0A0A0A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="_17">92</div>
                </div>

                <svg
                  className="message2"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.6666 26.6666V7.70392C26.6666 6.39459 25.6053 5.33325 24.296 5.33325H7.70398C6.39465 5.33325 5.33331 6.39459 5.33331 7.70392V21.9266C5.33331 23.2359 6.39465 24.2973 7.70398 24.2973H22.2226L26.6666 26.6666Z"
                    stroke="#0A0A0A"
                    stroke-width="1.333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9026 14.764C10.9652 14.8266 11.0004 14.9115 11.0004 15C11.0004 15.0885 10.9652 15.1734 10.9026 15.236C10.8716 15.267 10.8349 15.2916 10.7944 15.3084C10.7539 15.3251 10.7105 15.3338 10.6666 15.3338C10.5781 15.3338 10.4932 15.2986 10.4306 15.236C10.368 15.1734 10.3329 15.0885 10.3329 15C10.3329 14.9115 10.368 14.8266 10.4306 14.764C10.4932 14.7014 10.5781 14.6663 10.6666 14.6663C10.7552 14.6663 10.84 14.7014 10.9026 14.764"
                    stroke="#0A0A0A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5698 14.764C16.6323 14.8266 16.6675 14.9115 16.6675 15C16.6675 15.0885 16.6323 15.1734 16.5698 15.236C16.5388 15.267 16.502 15.2916 16.4615 15.3084C16.421 15.3251 16.3776 15.3338 16.3338 15.3338C16.2452 15.3338 16.1603 15.2986 16.0978 15.236C16.0352 15.1734 16 15.0885 16 15C16 14.9115 16.0352 14.8266 16.0978 14.764C16.1603 14.7014 16.2452 14.6663 16.3338 14.6663C16.4223 14.6663 16.5072 14.7014 16.5698 14.764"
                    stroke="#0A0A0A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.9031 14.764C21.9657 14.8266 22.0008 14.9115 22.0008 15C22.0008 15.0885 21.9657 15.1734 21.9031 15.236C21.8721 15.267 21.8353 15.2916 21.7948 15.3084C21.7543 15.3251 21.7109 15.3338 21.6671 15.3338C21.5785 15.3338 21.4937 15.2986 21.4311 15.236C21.3685 15.1734 21.3333 15.0885 21.3333 15C21.3333 14.9115 21.3685 14.8266 21.4311 14.764C21.4937 14.7014 21.5785 14.6663 21.6671 14.6663C21.7556 14.6663 21.8405 14.7014 21.9031 14.764"
                    stroke="#0A0A0A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="email">
                  <svg
                    className="group20"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.7407 10.9999C15.7407 11.9375 15.4627 12.8541 14.9417 13.6337C14.4208 14.4133 13.6804 15.021 12.8142 15.3798C11.9479 15.7386 10.9947 15.8325 10.0751 15.6495C9.15548 15.4666 8.31076 15.0151 7.64776 14.3521C6.98476 13.6891 6.53324 12.8444 6.35032 11.9248C6.1674 11.0052 6.26128 10.052 6.6201 9.1857C6.97891 8.31945 7.58655 7.57905 8.36616 7.05813C9.14577 6.53721 10.0623 6.25917 11 6.25917C12.2573 6.25917 13.4631 6.75864 14.3522 7.6477C15.2412 8.53676 15.7407 9.74258 15.7407 10.9999ZM15.7407 10.9999V12.7777C15.7407 13.5635 16.0529 14.3171 16.6085 14.8728C17.1642 15.4285 17.9178 15.7406 18.7037 15.7406C19.4895 15.7406 20.2431 15.4285 20.7988 14.8728C21.3545 14.3171 21.6666 13.5635 21.6666 12.7777V10.9999C21.6666 8.17093 20.5428 5.45783 18.5424 3.45744C16.542 1.45706 13.8289 0.333252 11 0.333252C8.17099 0.333252 5.45789 1.45706 3.4575 3.45744C1.45712 5.45783 0.333313 8.17093 0.333313 10.9999C0.333309 12.754 0.765906 14.4811 1.59279 16.0281C2.41967 17.5751 3.61531 18.8943 5.0738 19.8689C6.53229 20.8434 8.20862 21.4432 9.9543 21.6152C11.7 21.7872 13.4611 21.526 15.0817 20.8547C15.7866 20.5606 16.4577 20.1915 17.0835 19.7537"
                      stroke="#0A0A0A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="comments">13 comments</div>
            </div>

            <div className="carousel-slick-dot">
              <div className="carousel-slick-dot2">
                <div className="slick-inactive"></div>
              </div>

              <div className="carousel-slick-dot3">
                <div className="slick-active"></div>
              </div>

              <div className="carousel-slick-dot2">
                <div className="slick-inactive"></div>
              </div>

              <div className="carousel-slick-dot2">
                <div className="slick-inactive"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
