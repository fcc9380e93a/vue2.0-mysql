DROP DATABASE IF EXISTS foods;
CREATE DATABASE foods;
USE foods;

DROP TABLE IF EXISTS user;
CREATE TABLE user(
   id int(8) NOT NULL AUTO_INCREMENT,
   name varchar(10) NOT NULL,
   password varchar(10) NOT NULL,
   nickname varchar(20),
   email varchar(35),
   type char(1),
   gender char(1),
   reg_time datetime DEFAULT NULL,
   favorites int(8),
   img  text,
   PRIMARY KEY (id)
);
alter table user convert to character set utf8;

DROP TABLE IF EXISTS menu;
CREATE TABLE menu(
   id_type int(3) NOT NULL AUTO_INCREMENT,
   type varchar(20) NOT NULL,
   dcrp varchar(30) NOT NULL,
   url  varchar(20)  NOT NULL,
   PRIMARY KEY(id_type)
);
alter table menu convert to character set utf8;

DROP TABLE IF EXISTS food;
CREATE TABLE food(
   food_id int(8) NOT NULL AUTO_INCREMENT,
   type char(2),
   name varchar(40) NOT NULL,
   des varchar(30),
   detail  text,
   price varchar(6),
   img text,
   PRIMARY KEY (food_id)
);
alter table food convert to character set utf8;

INSERT INTO user VALUES
('1','Lily','123456','Hello Kitty','247654@qq.com','1','1','2017-02-12',0,'avatar.png'),
('2','test','123456','Mona Vai','test@163.com','1','1','2017-02-11',0,'avatar.png');

INSERT INTO menu VALUES
('1', '咖啡', '现磨咖啡', 'menu_coffee.jpg'),
('2', '早餐', '营养丰盛 & 温暖送达', 'menu_breakfast.jpg'),
('3', '小吃', '种类众多 & 服务周到', 'menu_munchies.jpg'),
('4', '三明治', '新鲜健康美味', 'menu_sandwiches.jpg'),
('5', '特色饮品', '品类繁多', 'menu_drink.jpg');

INSERT INTO food VALUES
('1', '1', '拿铁咖啡', '热饮系列', '浓郁的意大利浓咖啡与牛奶的经典混合,没有对苦味的亵渎，却注入纯粹的奶香，搅乱咖啡的枯燥，在流动的黑与白之间游走，凝结甜与苦的孤单。', '10', 'coffee1.jpg'),
('2', '1', '卡布奇诺', '热饮系列', '卡布奇诺是一种加入以同量的意大利特浓咖啡和蒸汽泡沫牛奶相混合的意大利咖啡。此时咖啡的颜色，就像卡布奇诺教会的修士在深褐色的外衣上覆上一条头巾一样', '20', 'coffee2.jpg'),
('3', '1', '黑咖啡', '热饮系列', '黑咖啡是不加任何修饰的咖啡，黑咖啡带来的是品味咖啡的原始感受。黑咖啡集合了咖啡香甘醇酸苦五味的特点，它原始而又粗犷，深邃而又耐人寻味。', '12.5', 'coffee3.jpg'),
('4', '1', '牛奶冰咖啡', '冷饮系列', '浓郁的意大利浓咖啡与牛奶的经典混合，在加上一些冰块，消热解暑。', '25', 'coffee4.jpg'),
('5', '2', '草莓奶油面包', '奶油水果面包', '草莓奶油面包是以高粉、白砂糖、鸡蛋等食材制成的一道美食。健康营养又好吃', '5', 'breakfast1.jpg'),
('6', '2', '草莓圆面包', '奶油水果面包', '草莓奶油面包是以高粉、白砂糖、鸡蛋等食材制成的一道美食。健康营养又好吃', '5.5', 'breakfast2.jpg'),
('7', '2', '白面包', '普通面包', '口感宣软、微甜,制作简单。主要有高筋面粉、酵母、黄油制作而成。配以牛奶、豆浆适合早餐食用', '6', 'breakfast3.jpg'),
('8', '2', '牛角面包', '普通面包', '新鲜的牛角面包，不仅色泽金黄，口感更是松软可口。每个120～130克', '4', 'breakfast4.jpg'),
('9', '2', '毛毛虫面包', '甜面包', '毛毛虫面包,是款很经典的面包,无防腐剂，健康好吃。每个100～120克', '5', 'breakfast5.jpg'),
('10', '2', '全麦面包', '全麦面包', '全麦面包，无添加油和糖，健康保质期短，建议冷藏保存。每个80～90每克', '6', 'breakfast6.jpg'),
('11', '2', '奶油甜甜圈', '甜甜圈', '甜甜圈，又称多拿滋、唐纳滋，它是一种用面粉、白砂糖、奶油和鸡蛋混合之后再经过油炸的甜食。每个90～100克', '7', 'breakfast7.jpg'),
('12', '2', '奶油长面包', '奶油面包', '普通面包中加入奶油，淋上果酱，甜而不腻。每个200～210克', '6.5', 'breakfast8.jpg'),
('13', '2', '手撕面包', '全麦面包', '手撕面包营养丰富，口感美味，超强饱腹，轻松满足一上午的营养所需。每个300～400克', '7', 'breakfast9.jpg'),
('14', '3', '经典蛋挞', '蛋挞', '蛋挞是指馅料外露的馅饼(相对表面被饼皮覆盖馅料密封之批派馅饼),每个30～40克', '3', 'munchie1.jpg'),
('15', '4', '火腿生菜三明治', '火腿三明治', '两层火腿生菜三明治，健康营养，每个80～90克', '5', 'sandwiche1.jpg'),
('16', '4', '鸡肉生菜三明治', '鸡肉三明治', '两层鸡肉生菜三明治，还有番茄，生菜健康营养，每个90～100克', '5.5', 'sandwiche2.jpg'),
('17', '5', '柠檬蜂蜜饮料', '饮料', '柠檬水中加入蜂蜜，清甜可口，每杯300ml', '6', 'drink1.jpg'),
('18', '5', '橙子汁', '果汁', '新鲜橙子现榨而成，每杯400ml', '8', 'drink2.jpg'),
('19', '5', '西瓜汁', '果汁', '西瓜现榨而成，健康好喝，每杯400ml', '8', 'drink3.jpg');



DROP TABLE IF EXISTS likes;
CREATE TABLE likes(
   id int(8) NOT NULL,
   food_id int(8) NOT NULL,
   PRIMARY KEY(id,food_id),
   CONSTRAINT likes_userid FOREIGN KEY (id) REFERENCES user (id),
   CONSTRAINT likes_foodid FOREIGN KEY (food_id) REFERENCES food (food_id)
);
