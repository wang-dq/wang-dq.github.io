#### 项目启动

git clone https://github.com/wang-dq/wang-dq.github.io.git</br>
npm install</br>
npm run dev</br>

#### 类 tuopuTree

#### 初始化 init ()

tuopuTree.init(data){}</br>
data:json 字符串
'[{"id":"1","type":"node","prevs":"","nexts":["l1","l2","l3"],"text":"1","attribute":{"x":600,"y":130,"width":60,"height":60}},{"id":"2","type":"node","prevs":"l1","nexts":["l4","l5","l6"],"text":"2","attribute":{"x":300,"y":290,"width":60,"height":60}},{"id":"3","type":"node","prevs":"l2","nexts":["l7","l8","l9"],"text":"3","attribute":{"x":600,"y":290,"width":60,"height":60}},{"id":"4","type":"node","prevs":"l3","nexts":["l10","l11","l12"],"text":"4","attribute":{"x":900,"y":290,"width":60,"height":60}},{"id":"5","type":"node","prevs":"l4","nexts":[],"text":"5","attribute":{"x":200,"y":450,"width":60,"height":60}},{"id":"6","type":"node","prevs":"l5","nexts":[],"text":"6","attribute":{"x":300,"y":450,"width":60,"height":60}},{"id":"7","type":"node","prevs":"l6","nexts":[],"text":"7","attribute":{"x":400,"y":450,"width":60,"height":60}},{"id":"8","type":"node","prevs":"l7","nexts":[],"text":"8","attribute":{"x":500,"y":450,"width":60,"height":60}},{"id":"9","type":"node","prevs":"l8","nexts":[],"text":"9","attribute":{"x":600,"y":450,"width":60,"height":60}},{"id":"10","type":"node","prevs":"l9","nexts":[],"text":"10","attribute":{"x":700,"y":450,"width":60,"height":60}},{"id":"11","type":"node","prevs":"l10","nexts":[],"text":"11","attribute":{"x":800,"y":450,"width":60,"height":60}},{"id":"12","type":"node","prevs":"l11","nexts":[],"text":"12","attribute":{"x":900,"y":450,"width":60,"height":60}},{"id":"13","type":"node","prevs":"l12","nexts":[],"text":"13","attribute":{"x":1000,"y":450,"width":60,"height":60}},{"id":"l1","type":"line","prevs":"1","nexts":["2"],"text":"l1"},{"id":"l2","type":"line","prevs":"1","nexts":["3"],"text":"l2"},{"id":"l3","type":"line","prevs":"1","nexts":["4"],"text":"l3"},{"id":"l4","type":"line","prevs":"2","nexts":["5"],"text":"l4"},{"id":"l5","type":"line","prevs":"2","nexts":["6"],"text":"l5"},{"id":"l6","type":"line","prevs":"2","nexts":["7"],"text":"l6"},{"id":"l7","type":"line","prevs":"3","nexts":["8"],"text":"l7"},{"id":"l8","type":"line","prevs":"3","nexts":["9"],"text":"l8"},{"id":"l9","type":"line","prevs":"3","nexts":["10"],"text":"l9"},{"id":"l10","type":"line","prevs":"4","nexts":["11"],"text":"l10"},{"id":"l11","type":"line","prevs":"4","nexts":["12"],"text":"l11"},{"id":"l12","type":"line","prevs":"4","nexts":["13"],"text":"l12"}]';

#### 移动节点 move()

tuopuTree.move(id,axis){}
axis={x:'',y:''}

#### 获取数据信息 getInfo

tuopuTree.getInfo(id){}
根据 id 进行查找，如果 id 存在返回相关数据否则不存在返回 null,如果不提供 id 返回所有数据
