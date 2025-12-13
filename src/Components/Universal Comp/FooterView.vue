<template >
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
   
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>