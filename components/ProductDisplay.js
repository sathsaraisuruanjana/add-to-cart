app.component('product-display',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }

    },
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div  class="grid-container">
                <div class="grid-item">
                      <div class="product-image">
                         <img v-bind:src="image" >
                       </div>
                  </div>
        
                    <div class="grid-item">
                        <div class="product-info">
                            <h1>{{ title }}</h1>
                            <p>{{description}}</p>
                            <!-- <a v-bind:href="url"></a> -->
                            <!-- <p v-if="inStock">In Stock</p>
                            <p v-else>Out of Stock</p> -->
                            <p v-if="inventory > 10">In Stock</p>
                            <p v-else-if="inventory <= 10 && inventory > 0">Almost </p>
                            <P v-else>Out of Stock</P>
                            <p>Shipping: {{shipping}}</p>
                            <!-- <p v-if="onSale">on sale</p> -->

                            <li v-for="detail in details">{{ detail }}</li>

                            <div v-for="(variant, index) in variants"
                            :key="variant.id" 
                            @mouseover="updateVariant(index)"
                            class="color-circle" 
                            :style ="{ backgroundColor: variant.color }">
                            </div>
                        </div>
                        <button class="button" 
                            :class="{disableButton: !inStock}"
                            :disabled="!inStock"
                            v-on:click="addToCart">
                             Add to cart
                    </button>
                    </div>     
            </div>
        </div>   
    </div>
   

        
            `  ,
            
    
    
            data() {
                return {
                    product:'Socks',
                    description:'this is description',
                    selectedVariant: 0,
                    // url:'https//:isuruanjanacode.github.io',
                    // inStock: true
                    inventory: 10,
                    onSale: true,
                    details:['50% cotton' , '30% wool'],
                    variants:[
                        {id:2234, color:'blue' , image:'assets/download.jpeg' , quantity:50},
                        {id:2235, color:'red' ,image:'assets/download (1).jpeg', quantity: 0}
                    ],
                     brand:'Vue Mastery'
                }
            },
            methods:{
                addToCart(){
                    this.$emit('add-to-cart' , this.variants[this.selectedVariant].id)
                },
                updateVariant(index){
                    this.selectedVariant = index
                    console.log(index)
                }
            },
            computed:{
                title(){
                    return this.brand + '' + this.product
                },
                image(){
                    return this.variants[this.selectedVariant].image
                },
                inStock(){
                    return this.variants[this.selectedVariant].quantity
                },
                shipping(){
                    if(this.premium){
                        return 'Free'
                    }
                    return 2.99
                }
            }
})