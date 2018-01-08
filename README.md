#### 项目启动

git clone https://github.com/wang-dq/wang-dq.github.io.git</br>
npm install</br>
npm run dev</br>

#### 类 tuopuTree

#### 增加节点 create()

tuopuTree.create(arg){}</br>
参数 arg 可以为空、对象,对象属性{</br>
id:</br>
cx:圆心 x 位置,</br>
cx:圆心 y 位置,</br>
r:圆 半径 ,</br>
fill:填充颜色 默认 ‘#0095DD’,</br>
stroke:描边颜色 默认 ‘#0095DD’,</br>
strokeWidth:描边 宽度 默认 ‘2px’</br>
}

#### 增删除节点 delete(id)

tuopuTree.delete(id){}
根据 id 删除相应节点，如果不传，则删除所有节点

#### 修改节点 update

tuopuTree.update(obj){}
参数与增加节点一致，如果没有 obj 或者 obj.id 在数据里查询不到则不做任何处理

#### 查找节点 query

tuopuTree.query(id){}
根据 id 进行查找，如果 id 存在返回相关数据否则不存在返回 null,如果不提供 id 返回所有数据
