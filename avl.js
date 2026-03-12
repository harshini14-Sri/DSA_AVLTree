class AVLNode{
constructor(data){
this.data=data
this.left=null
this.right=null
this.h=1
}
}

class AVLTree{

height(n){
if(n==null) return 0
return n.h
}

updateHeight(n){
n.h=1+Math.max(this.height(n.left),this.height(n.right))
}

getBF(n){
if(n==null) return 0
return this.height(n.left)-this.height(n.right)
}

rightRotate(y){

let x=y.left
let t2=x.right

x.right=y
y.left=t2

this.updateHeight(y)
this.updateHeight(x)

return x
}

leftRotate(x){

let y=x.right
let t2=y.left

y.left=x
x.right=t2

this.updateHeight(x)
this.updateHeight(y)

return y
}

insert(root,val){

if(root==null) return new AVLNode(val)

if(val<root.data)
root.left=this.insert(root.left,val)

else
root.right=this.insert(root.right,val)

this.updateHeight(root)

let bf=this.getBF(root)

if(bf>1 && val<root.left.data)
return this.rightRotate(root)

if(bf<-1 && val>root.right.data)
return this.leftRotate(root)

if(bf>1 && val>root.left.data){
root.left=this.leftRotate(root.left)
return this.rightRotate(root)
}

if(bf<-1 && val<root.right.data){
root.right=this.rightRotate(root.right)
return this.leftRotate(root)
}

return root
}

}