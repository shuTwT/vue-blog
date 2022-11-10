---
title:Collection集合
lang:zh-CN
time:2022/6/8 13:50
---

- Collection 类关系图
  - [知识体系结构](#知识体系结构)
  - [介绍](#介绍)
  - Collection
    - Set
      - [TreeSet](#treeset)
      - [HashSet](#hashset)
      - [LinkedHashSet](#linkedhashset)
    - List
      - [ArrayList](#arraylist)
      - [Vector](#vector)
      - [LinkedList](#linkedlist)
    - Queue
      - [LinkedList](#linkedlist-1)
      - [PriorityQueue](#priorityqueue)
  - Map
    - [TreeMap](#treemap)
    - [HashMap](#hashmap)
    - [HashTable](#hashtable)
    - [LinkedHashMap](#linkedhashmap)
  - [参考内容](#参考内容)

## 知识体系结构

![](./img/java_collections_overview.png)

## 介绍

容器，就是可以容纳其他Java对象的对象。*Java Collections Framework(JCF)*为Java开发者提供了通用的容器，其始于JDK 1.2，优点是:

- 降低编程难度
- 提高程序性能
- 提高API间的互操作性
- 降低学习难度
- 降低设计和实现相关API的难度
- 增加程序的重用性

Java容器里只能放对象，对于基本类型(int, long, float, double等)，需要将其包装成对象类型后(Integer, Long, Float, Double等)才能放到容器里。很多时候拆包装和解包装能够自动完成。这虽然会导致额外的性能和空间开销，但简化了设计和编程。

##  Collection

> 容器主要包括 Collection 和 Map 两种，Collection 存储着对象的集合，而 Map 存储着键值对(两个对象)的映射表。

### Set

#### TreeSet

基于红黑树实现，支持有序性操作，例如根据一个范围查找元素的操作。但是查找效率不如 HashSet，HashSet 查找的时间复杂度为 O(1)，TreeSet 则为 O(logN)。

#### HashSet

基于哈希表实现，支持快速查找，但不支持有序性操作。并且失去了元素的插入顺序信息，也就是说使用 Iterator 遍历 HashSet 得到的结果是不确定的。

##### 添加元素

```java
public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");  // 重复的元素不会被添加
        System.out.println(sites);
    }

```

##### 判断元素是否存在

```java
public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");  // 重复的元素不会被添加
        System.out.println(sites.contains("Taobao"));
    }
    
```

##### 删除元素

```java
public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");     // 重复的元素不会被添加
        sites.remove("Taobao");  // 删除元素，删除成功返回 true，否则为 false
        System.out.println(sites);
    }
```

clear方法删除集合中所有元素

##### 计算大小

```java
public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");     // 重复的元素不会被添加
        System.out.println(sites.size());  
    }
```

##### 迭代

使用for-each来迭代 HashSet 中的元素。

```java
public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");     // 重复的元素不会被添加
        for (String i : sites) {
            System.out.println(i);
        }
    }
```

#### LinkedHashSet

具有 HashSet 的查找效率，且内部使用双向链表维护元素的插入顺序。

### List

#### ArrayList

基于动态数组实现，支持随机访问。

##### 添加元素

```java
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Jiyik");
        sites.add("Taobao");
        sites.add("Weibo");
    }

```

##### 访问元素

```java
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Jiyik");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites.get(1));  // 访问第二个元素
    }

```

##### 修改元素

```java
public static void main(String[] args) {
         ArrayList<String> sites = new ArrayList<String>();
         sites.add("Google");
         sites.add("Jiyik");
         sites.add("Taobao");
         sites.add("Weibo");
         sites.set(2, "Wiki"); // 第一个参数为索引位置，第二个为要修改的值
         System.out.println(sites);
     }

```

##### 删除元素

```java
public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Jiyik");
        sites.add("Taobao");
        sites.add("Weibo");
        sites.remove(3); // 删除第四个元素
        System.out.println(sites);
   }
   
```

###### 计算大小

```java
 public static void main(String[] args) {
         ArrayList<String> sites = new ArrayList<String>();
         sites.add("Google");
         sites.add("Jiyik");
         sites.add("Taobao");
         sites.add("Weibo");
         System.out.println(sites.size());
     }
     
```

##### 迭代数组列表

```java
public static void main(String[] args) {
         ArrayList<String> sites = new ArrayList<String>();
         sites.add("Google");
         sites.add("Jiyik");
         sites.add("Taobao");
         sites.add("Weibo");
         for (int i = 0; i < sites.size(); i++) {
             System.out.println(sites.get(i));
         }
     }
```

也可以使用for-each

```java
public static void main(String[] args) {
         ArrayList<String> sites = new ArrayList<String>();
         sites.add("Google");
         sites.add("Jiyik");
         sites.add("Taobao");
         sites.add("Weibo");
         for (String i : sites) {
             System.out.println(i);
         }
     }
```

排序

```java
 public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Taobao");
        sites.add("Wiki");
        sites.add("Jiyik");
        sites.add("Weibo");
        sites.add("Google");
        Collections.sort(sites);  // 字母排序
        for (String i : sites) {
            System.out.println(i);
        }
    }
    
```



#### Vector

和 ArrayList 类似，但它是线程安全的。

#### LinkedList

基于双向链表实现，只能顺序访问，但是可以快速地在链表中间插入和删除元素。不仅如此，LinkedList 还可以用作栈、队列和双向队列。

### Queue

#### LinkedList

可以用它来实现双向队列。

#### PriorityQueue

基于堆结构实现，可以用它来实现优先队列。

## Map

### TreeMap

基于红黑树实现。

### HashMap

基于哈希表实现。

使用键值对的方式进行存储。

#### 添加元素

```java
public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        System.out.println(Sites);
    }

```

```java
public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<String, String> Sites = new HashMap<String, String>();
        // 添加键值对
        Sites.put("one", "Google");
        Sites.put("two", "Runoob");
        Sites.put("three", "Taobao");
        Sites.put("four", "Zhihu");
        System.out.println(Sites);
    }
```

#### 访问元素

```java
public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        System.out.println(Sites.get(3));
    }
    
```

#### 删除元素

```java
public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        Sites.remove(4);
        System.out.println(Sites);
    }

```

可以使用clear方法删除所有键值。

#### 计算大小

```java
public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        System.out.println(Sites.size());
    }
    
```

#### 迭代hashMap

可以使用for-each来迭代HashMap中的元素。

如果你只想获取 key，可以使用 keySet() 方法，然后可以通过 get(key) 获取对应的 value，如果你只想获取 value，可以使用 values() 方法。

```java
public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        // 输出 key 和 value
        for (Integer i : Sites.keySet()) {
            System.out.println("key: " + i + " value: " + Sites.get(i));
        }
        // 返回所有 value 值
        for(String value: Sites.values()) {
          // 输出每一个value
          System.out.print(value + ", ");
        }
    }
    
```

### HashTable

和 HashMap 类似，但它是线程安全的，这意味着同一时刻多个线程可以同时写入 HashTable 并且不会导致数据不一致。它是遗留类，不应该去使用它。现在可以使用 ConcurrentHashMap 来支持线程安全，并且 ConcurrentHashMap 的效率会更高，因为 ConcurrentHashMap 引入了分段锁。

### LinkedHashMap

使用双向链表来维护元素的顺序，顺序为插入顺序或者最近最少使用(LRU)顺序。

## 参考内容

- CarpenterLee/JCFInternals https://github.com/CarpenterLee/JCFInternals
