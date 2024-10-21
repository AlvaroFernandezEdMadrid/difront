import React from 'react'

function Grid() {
return(
    <div class="grid grid-rows-2 lg:grid-cols-2 h-screen font">
        <div class="rounded-md bg-green-400 shadow-md w-64">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgDd9upJwVMgYFCkYZie0yIvuScP2XbeVig&s" alt="cobble" />
        </div>
        <div class="rounded-md bg-green-400 shadow-md w-64">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkDivs-WxplKe2PYuS8qvajg9kJssQnHhjA&s" alt="cobble" />
        </div>
    </div>
)
}

export default Grid;