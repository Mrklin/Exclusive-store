<!-- <template >
    <div class="flex flex-col justify-between items-center gap-3 bg-black bottom-0  text-[#FAFAFA] mt-4">
         <div class="grid grid-cols-5 gap-4 font-body [&_h4]:text-xl p-15">
            <div class="flex flex-col  items-start gap-4">
                <h3 class="font-fancy text-2xl font-bold">Exclusive</h3>
                <h4>Subscribe</h4>

                <p>Get 10% off your first order</p>
                <span class="flex justify-center items-center border border-[#FAFAFA] p-2 w-[80%] rounded-sm">
                    <input type="text" placeholder="Enter Your Email" class="w-full border-0 outline-0" >
                    <img src="\src\assets\icons\icon-send.svg" class="cursor-pointer" alt="">
                </span>
            </div>
            <div class="flex flex-col gap-3 items-start">
                <h4>Support</h4>
                <p>111 Bijoy sarani, Dhaka,<br>  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div class="flex flex-col gap-3 items-start">
                <h4>Account</h4>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div class="flex flex-col gap-3 items-start">
                <h4>Quick Link</h4>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div class="flex flex-col gap-3 items-start">
                <h4>Download App</h4>
                <span class="flex flex-col justify-between gap-2">
                <p class="text-xs font-light">Save $3 with App New User Only</p>
                <span class="flex gap-1">
                    <span><img src="\src\assets\footer\Qr Code.svg" alt=""></span>
                    <span class="flex flex-col gap-2 [&_span]:hover:cursor-pointer">
                        <span><img src="\src\assets\footer\google-pay.svg" alt=""></span>
                        <span><img src="\src\assets\footer\appstore.svg" alt=""></span>
                    </span>
                </span>
                <span class="flex justify-between items-center mt-2 
                [&_a]:p-2 [&_a]:cursor-pointer [&_a]:rounded-full  [&_a]:hover:bg-white/20">
                    <a href="#"><img src="\src\assets\footer\Icon-Facebook.svg" alt="facebook-icon"></a>
                    <a href="#"><img src="\src\assets\footer\Icon-Twitter.svg" alt="twitter-icon"></a>
                    <a href="#"><img src="\src\assets\footer\icon-instagram.svg" alt="inta-icon"></a>
                    <a href="#"><img src="\src\assets\footer\Icon-Linkedin.svg" alt="Linkedin-icon"></a>
                </span>
                </span>
                
                
            </div>
        </div>

        <div class="flex justify-center items-center text-white/10 border-white/10 border-t w-full py-5">
            © Copyright Rimel 2022. All right reserved
        </div>
    </div>
   
</template> -->

<template>
    <footer class="bg-black text-[#FAFAFA] mt-10 w-full font-body">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-6 py-10 md:px-10 lg:px-20 lg:py-16">
            
            <div class="flex flex-col items-start gap-4">
                <h3 class="font-fancy text-2xl font-bold">Exclusive</h3>
                <h4 class="text-xl">Subscribe</h4>
                <p class="text-sm">Get 10% off your first order</p>
                <div class="flex justify-between items-center border border-[#FAFAFA] p-2 w-full max-w-[240px] rounded-sm bg-transparent">
                    <input type="text" placeholder="Enter Your Email" class="w-full border-0 outline-0 bg-transparent text-sm text-white placeholder:text-gray-500">
                    <img src="/src/assets/icons/icon-send.svg" class="cursor-pointer w-5 h-5" alt="send">
                </div>
            </div>

            <div class="flex flex-col gap-4 items-start">
                <h4 class="text-xl">Support</h4>
                <p class="text-sm leading-6">111 Bijoy sarani, Dhaka,<br> DH 1515, Bangladesh.</p>
                <p class="text-sm">exclusive@gmail.com</p>
                <p class="text-sm">+88015-88888-9999</p>
            </div>

            <div class="flex flex-col gap-4 items-start">
                <h4 class="text-xl">Account</h4>
                <ul class="flex flex-col gap-3 text-sm [&_li]:cursor-pointer [&_li]:hover:underline">
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>

            <div class="flex flex-col gap-4 items-start">
                <h4 class="text-xl">Quick Link</h4>
                <ul class="flex flex-col gap-3 text-sm [&_li]:cursor-pointer [&_li]:hover:underline">
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div class="flex flex-col gap-4 items-start">
                <h4 class="text-xl">Download App</h4>
                <div class="flex flex-col gap-2">
                    <p class="text-[10px] font-light opacity-70">Save $3 with App New User Only</p>
                    <div class="flex gap-2">
                        <img src="/src/assets/footer/Qr Code.svg" alt="QR Code" class="w-20 h-20">
                        <div class="flex flex-col gap-2">
                            <img src="/src/assets/footer/google-pay.svg" alt="Google Pay" class="cursor-pointer">
                            <img src="/src/assets/footer/appstore.svg" alt="App Store" class="cursor-pointer">
                        </div>
                    </div>
                </div>

                <div class="flex gap-6 mt-4">
                    <a href="#" class="hover:opacity-75 transition-opacity"><img src="/src/assets/footer/Icon-Facebook.svg" alt="Facebook"></a>
                    <a href="#" class="hover:opacity-75 transition-opacity"><img src="/src/assets/footer/Icon-Twitter.svg" alt="Twitter"></a>
                    <a href="#" class="hover:opacity-75 transition-opacity"><img src="/src/assets/footer/icon-instagram.svg" alt="Instagram"></a>
                    <a href="#" class="hover:opacity-75 transition-opacity"><img src="/src/assets/footer/Icon-Linkedin.svg" alt="Linkedin"></a>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center text-white/20 border-white/10 border-t w-full py-6 text-sm">
            © Copyright Rimel 2022. All right reserved
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>
<style lang="">
    
</style>