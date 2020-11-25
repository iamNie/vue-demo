<template>
  <div style="position: relative; width: 100%; height: 100%; margin: auto" id="topo_content">
    <canvas id="topology-canvas" width="1000" height="600"></canvas>
  </div>
</template>

<script>
import demo from "../../utils/demo.json";
// import $ from "jquery";
export default {
  name: "app",
  data() {
    return {
      // msg: "",
      // stage: null,
      // scene: null,
      // nodeMenu: null,
      // dialogTitle: "",
      // assetList: [], //资产名称
      // showTools: true, //显示工具栏
      // form: {
      //   //添加辅助图标
      //   nodeName: "",
      //   nodeImg: "",
      //   //添加连线
      //   localDevIp: "", //起始设备
      //   remoteDevIp: "", //目的设备
      //   lineType: "", //连线类型
      //   //节点设置
      //   nodeTextType: "", //节点名称类型
      //   nodeText: "" //设备IP或名称
      // },
      // addFrom: {
      //   topoName: ""
      // },
      // dialogType: "", //弹框类型
      // dialogFormVisible: false,
      // optionList: [
      //   {
      //     label: "云",
      //     value: 1
      //   },
      //   {
      //     label: "楼宇",
      //     value: 2
      //   },
      //   {
      //     label: "DPX",
      //     value: 3
      //   },
      //   {
      //     label: "路由器",
      //     value: 6
      //   },
      //   {
      //     label: "交换机",
      //     value: 5
      //   }
      // ],
      // isfullscreen: false,
      // treeData: [
      //   {
      //     label: " / ",
      //     children: []
      //   }
      // ],
      // defaultProps: {
      //   children: "children",
      //   label: "label"
      // },
      // nodeTextList: [
      //   {
      //     value: "设备名称",
      //     id: "1"
      //   },
      //   {
      //     value: "设备ip",
      //     id: "2"
      //   },
      //   {
      //     value: "设备名称(设备IP)",
      //     id: "3"
      //   }
      // ],
      // lineList: [
      //   {
      //     label: "直线",
      //     value: 1
      //   },
      //   {
      //     label: "折线（横向）",
      //     value: 2
      //   },
      //   {
      //     label: "折线（纵向）",
      //     value: 3
      //   },
      //   {
      //     label: "二次折线（横向）",
      //     value: 4
      //   },
      //   {
      //     label: "二次折线（纵向）",
      //     value: 5
      //   }
      // ],
      // topoName: "",
      // operate: "edit", //默认操作类型为修改，当新增拓扑图的时候为add
      // nodeList: [], //当前拓扑图的node节点组合
      // linkOffsetGap: 40, // 折线拐角处的长度
      // defaultTopo: 0, //一开始创建topo图的时候都是默认0  0说明没有将这个拓扑图设置成默认拓扑
      // dialogAddFormVisible: false,
      // successMessage: ""
    };
  },
  components: {}

  // mounted() {
  //   return;
  //   let _this = this;
  //   var window_height = `${document.documentElement.clientHeight}` - 100;
  //   var window_width = `${document.documentElement.clientWidth}` * 0.8353 - 20;
  //   document.getElementById("topology-canvas").height = window_height;
  //   document.getElementById("topology-canvas").width = window_width;
  //   // 节点菜单
  //   _this.nodeMenu = $("#node-menu");
  //   // 折线菜单
  //   _this.lineMenu = $("#line-menu");
  //   // 拓扑菜单
  //   _this.mainMenu = $("#main-menu");
  //   // 节点气泡
  //   _this.nodeTips = $(".node-tooltip");
  //   // 线条气泡
  //   _this.linkTips = $(".link-tooltip");
  //   // 线条布局节点
  //   _this.linkStyleSet = $("#link-style-set");
  //   // 线条布局二级菜单
  //   _this.linkLineStyleMenu = $("#link-lineStyle-menu");
  //   // 应用布局选项(二级菜单) 修改连线类型
  //   _this.layoutMenu = $("#layout-menu");
  //   // 节点文字方向
  //   _this.nodeTextPosMenu = $("#node-text-pos-menu");
  //   //要改变的连接线的信息
  //   _this.currentLink = "";
  //   //要删除的node节点信息
  //   _this.currentNode = "";

  //   _this.fullScreen = this.fullScreen;
  //   //初始化
  //   _this.init();
  //   // _this.getAssetTopo();
  //   // this.createInit(demoJson.data.scene.childs);
  //   //获取所有的资产列表
  //   this.createInit(demo.data.scene.childs);
  // },
  // methods: {
  //   //初始化topo
  //   createInit(topoData) {
  //     let _this = this;
  //     this.nodeList = [];
  //     console.log(topoData);
  //     if (topoData == undefined) {
  //       topoData = [];
  //     } else {
  //       for (let i in topoData) {
  //         if (topoData[i].elementType == "node") {
  //           this.nodeList.push(topoData[i]);
  //         }
  //       }
  //     }
  //     $(document).ready(function() {
  //       //移除旧的canvas
  //       $("#topology-canvas").remove();
  //       // //创建新的canvas
  //       var new_canvas =
  //         '<canvas id="topology-canvas">您的浏览器不支持HTML5!</canvas>';
  //       $("#topo_content").append(new_canvas);
  //       var window_height = `${document.documentElement.clientHeight}` - 100;
  //       var window_width =
  //         `${document.documentElement.clientWidth}` * 0.8353 - 20;
  //       document.getElementById("topology-canvas").height = window_height;
  //       document.getElementById("topology-canvas").width = window_width;

  //       // $("#topo_content #topology-canvas").css(
  //       //   "background",
  //       //   "rgba(255, 255, 255, 0.8)"
  //       // );
  //       // $("#topo_content #topology-canvas").css(
  //       //   "box-shadow",
  //       //   "rgba(0, 0, 0, 0.08) 0px 0px 10px 0px"
  //       // );
  //       var canvas = document.getElementById("topology-canvas");
  //       var stage = new JTopo.Stage(canvas);

  //       var scene = new JTopo.Scene(stage);
  //       // scene.alpha = 0.5;
  //       _this.scene = scene;
  //       // for (let key in newScene) {
  //       //   _this.scene[key] = newScene[key];
  //       // }
  //       var childs = topoData;
  //       for (let i in childs) {
  //         var a = childs[i];
  //         if (a.elementType == "node") {
  //           //节点
  //           var node = new JTopo.Node(a.text);
  //           node.setLocation(a.x, a.y);
  //           node.setImage("/static/img/" + a.nodeImage, true);
  //           node.fontColor = "0,0,0";
  //           node.nodeId = a.nodeId;
  //           node.nodeType = a.nodeType;
  //           node.nodeImage = a.nodeImage;
  //           node.scaleX = a.scaleX;
  //           node.scaleY = a.scaleY;
  //           node.devIp = a.devIp;
  //           node.textPosition = a.textPosition;
  //           if (node) {
  //             node.alarm = a.alarm;
  //             node.alarmColor = "255,0,0";
  //             node.alarmAlpha = 0.5;
  //           }
  //           scene.add(node);
  //         } else if (a.elementType == "link") {
  //           //如果是连线
  //           var link = null;
  //           if (link == null) {
  //             var nodes = stage.find("node");
  //             var nodeA, nodeZ;
  //             if (a.nodeSrc && a.nodeDst) {
  //               nodes.forEach(function(nodeElement) {
  //                 if (nodeElement.elementType == "node") {
  //                   if (nodeElement.nodeId == a.nodeSrc) {
  //                     nodeA = nodeElement; //起点
  //                   }
  //                   if (nodeElement.nodeId == a.nodeDst) {
  //                     nodeZ = nodeElement; //终点
  //                   }
  //                 }
  //               });
  //             }

  //             //绘制折线
  //             var c = null;
  //             if (nodeA && nodeZ) {
  //               // 折线和直线绘制
  //               if (a["lineType"] == "line") {
  //                 c = new JTopo.Link(nodeA, nodeZ);
  //                 c.lineType = "line";
  //               }
  //               if (a["lineType"] == "foldLine") {
  //                 c = new JTopo.FoldLink(nodeA, nodeZ);
  //                 c.bundleOffset = 40;
  //                 c.direction = a.direction;
  //                 c.lineType = "foldLine";
  //               }
  //               if (a["lineType"] == "flexLine") {
  //                 c = new JTopo.FlexionalLink(nodeA, nodeZ);
  //                 c.offsetGap = 40;
  //                 c.direction = a.direction;
  //                 c.lineType = "flexLine";
  //               }
  //               if (a["lineType"] == "curveLine") {
  //                 c = new JTopo.CurveLink(nodeA, nodeZ);
  //                 c.lineType = "curveLine";
  //               }
  //               c.alpha = 1;
  //               c.shadow = false;
  //               // c.shadowColor = 'rgba(0,0,0,0.5)';
  //               c.font = "12px Consolas";
  //               // c.fontColor = editor.config.linkFontColor;
  //               c.arrowsRadius = 0;
  //               c.lineWidth = 1.5;
  //               c.bundleGap = 0;
  //               c.eagleEyeVsibleDefault = false;

  //               c.id = a.id;
  //               c.strokeColor = a.strokeColor;
  //               c.lineClass = a.lineClass;
  //               c.nodeSrc = nodeA.nodeId;
  //               c.nodeDst = nodeZ.nodeId;
  //               c.localDevId = a.localDevId;
  //               c.localDevIp = a.localDevIp;
  //               c.localDevIfindex = a.localDevIfindex;
  //               c.localDevIfname = a.localDevIfname;
  //               c.remoteDevId = a.remoteDevId;
  //               c.remoteDevIp = a.remoteDevIp;
  //               c.remoteDevIfindex = a.remoteDevIfindex;
  //               c.remoteDevIfname = a.remoteDevIfname;
  //               // c.drawanimepic('../../static/img/a.png', scene)
  //               // c.scene = page.partid;
  //               // c.drawImg("", scene);
  //               scene.add(c);
  //             }
  //           } else {
  //             link.strokeColor = a.strokeColor;
  //           }
  //         }
  //       }
  //       _this.stage = stage;
  //       // window.stage = _this.stage
  //       //根据连线的起始结束信息获取连线
  //       function getLinkByKey(
  //         key1,
  //         value1,
  //         key2,
  //         value2,
  //         key3,
  //         value3,
  //         key4,
  //         value4
  //       ) {
  //         let link = null;
  //         stage.childs.forEach(function(s) {
  //           s.childs.forEach(function(n) {
  //             if (
  //               n.elementType === "link" &&
  //               n[key1] === value1 &&
  //               n[key2] === value2 &&
  //               n[key3] === value3 &&
  //               n[key4] === value4
  //             ) {
  //               link = n;
  //               return link;
  //             }
  //           });
  //         });
  //         return link;
  //       }
  //       //鼠标右键点击
  //       _this.scene.mouseup(function(e) {
  //         _this.init();
  //         if (_this.isfullscreen) return;
  //         if (e.target && e.target.elementType == "node" && e.button == 0) {
  //           _this.currentNode = e.target;
  //         } else if (
  //           e.target &&
  //           e.target.elementType == "node" &&
  //           e.button == 2
  //         ) {
  //           _this.currentNode = e.target;
  //           let menuX = e.offsetX;
  //           let menuY = e.offsetY;
  //           if (menuX + _this.nodeMenu.width() >= _this.stage.width) {
  //             menuX -= _this.nodeMenu.width();
  //           }
  //           if (menuY + _this.nodeMenu.height() >= _this.stage.height) {
  //             menuY -= _this.nodeMenu.height();
  //           }
  //           _this.nodeMenu
  //             .css({
  //               top: menuY,
  //               left: menuX
  //               // "display":'block',
  //             })
  //             .show();
  //         } else if (
  //           e.target &&
  //           e.target.elementType == "link" &&
  //           e.button == 2
  //         ) {
  //           _this.currentLink = e.target;
  //           let menuX = e.offsetX;
  //           let menuY = e.offsetY;
  //           if (menuX + _this.nodeMenu.width() >= _this.stage.width) {
  //             menuX -= _this.nodeMenu.width();
  //           }
  //           if (menuY + _this.nodeMenu.height() >= _this.stage.height) {
  //             menuY -= _this.nodeMenu.height();
  //           }
  //           _this.lineMenu
  //             .css({
  //               top: menuY,
  //               left: menuX
  //               // "display":'block',
  //             })
  //             .show();
  //         } else {
  //           //如果不是node节点，展示舞台右键菜单
  //           if (e.button == 2) {
  //             let menuX = e.offsetX;
  //             let menuY = e.offsetY;
  //             if (menuX + _this.mainMenu.width() >= _this.stage.width) {
  //               menuX -= _this.mainMenu.width();
  //             }
  //             if (menuY + _this.mainMenu.height() >= _this.stage.height) {
  //               menuY -= _this.mainMenu.height();
  //             }

  //             _this.mainMenu
  //               .css({
  //                 top: menuY,
  //                 left: menuX
  //                 // "display":'block',
  //               })
  //               .show();
  //           }
  //         }
  //       });
  //       //鼠标经过node节点时提示浮动
  //       _this.scene.mouseover(function(e) {
  //         if (
  //           e.target &&
  //           e.target.elementType == "node" &&
  //           e.target.nodeType == "dev"
  //         ) {
  //           showNodeToolTips(e, e.target);
  //         } else if (e.target && e.target.elementType == "link") {
  //           showLinkToolTips(e, e.target);
  //         } else {
  //           _this.nodeTips.hide();
  //           _this.linkTips.hide();
  //         }
  //       });
  //       //显示节点气泡
  //       function showNodeToolTips(e, node) {
  //         $("#node_tooltip_devLabel").html(node.text);
  //         $("#node_tooltip_devIp").html(node.devIp);
  //         // if (node.status == 1) {
  //         //   $("#node_tooltip_devStatus").html("正常");
  //         // } else {
  //         //   $("#node_tooltip_devStatus").html("异常");
  //         // }
  //         // $("#node_tooltip_cpuUsage").html(node.scaleX);
  //         // $("#node_tooltip_memUsage").html(node.scaleX);

  //         let menuX = e.offsetX;
  //         let menuY = e.offsetY;
  //         if (menuX + _this.nodeTips.width() >= _this.stage.width) {
  //           menuX -= _this.nodeTips.width();
  //         }
  //         if (menuY + _this.nodeTips.height() >= _this.stage.height) {
  //           menuY -= _this.nodeTips.height();
  //         }

  //         _this.nodeTips
  //           .css({
  //             top: menuY,
  //             left: menuX,
  //             cursor: "pointer"
  //           })
  //           .show();
  //       }
  //       //显示连接线气泡
  //       function showLinkToolTips(e, link) {
  //         $("#link_tooltip_devSrc").html(link.localDevIp);
  //         $("#link_tooltip_devDst").html(link.remoteDevIp);
  //         // $("#link_tooltip_devSrcIf").html(link.ifname);
  //         // if (link.adminstatus == 2 || link.operstatus == 2) {
  //         //   $("#link_tooltip_devSrcIfStatus")
  //         //     .html("DOWN")
  //         //     .removeClass("ui-status-normal")
  //         //     .addClass("ui-status-error")
  //         //     .css("color", "red");
  //         // } else {
  //         //   $("#link_tooltip_devSrcIfStatus")
  //         //     .html("UP")
  //         //     .removeClass("ui-status-error")
  //         //     .addClass("ui-status-normal")
  //         //     .css("color", "green");
  //         // }
  //         // var speed = unit_change(link.speed, "bps", 2);
  //         // $("#link_tooltip_devSrcIfSpeed").html(speed);
  //         // //目的设备
  //         // $("#link_tooltip_devDst").html(
  //         //   link.deviceIp + "(" + link.deviceLabel + ")"
  //         // );
  //         // $("#link_tooltip_devDstIf").html(link.ifname);
  //         // if (link.adminstatus == 2 || link.operstatus == 2) {
  //         //   $("#link_tooltip_devDstIfStatus")
  //         //     .html("DOWN")
  //         //     .removeClass("ui-status-normal")
  //         //     .addClass("ui-status-error")
  //         //     .css("color", "red");
  //         // } else {
  //         //   $("#link_tooltip_devDstIfStatus")
  //         //     .html("UP")
  //         //     .removeClass("ui-status-error")
  //         //     .addClass("ui-status-normal")
  //         //     .css("color", "green");
  //         // }
  //         // var speed = unit_change(link.speed, "bps", 2);
  //         // $("#link_tooltip_devDstIfSpeed").html(speed);

  //         let menuX = e.offsetX;
  //         let menuY = e.offsetY;
  //         if (menuX + _this.linkTips.width() >= _this.stage.width) {
  //           menuX -= _this.linkTips.width();
  //         }
  //         if (menuY + _this.linkTips.height() >= _this.stage.height) {
  //           menuY -= _this.linkTips.height();
  //         }

  //         _this.linkTips
  //           .css({
  //             top: menuY,
  //             left: menuX,
  //             cursor: "pointer"
  //             // "display":'block',
  //           })
  //           .show();
  //       }
  //       //鼠标移出时
  //       _this.scene.mouseout(function(e) {
  //         _this.nodeTips.hide();
  //         _this.linkTips.hide();
  //       });
  //       //鼠标放大缩小时拓扑图随之变化
  //       _this.scene.mousewheel(function(e) {
  //         //  this.stage.wheelzoom = 1.05;//缩放比例
  //         if (e.wheelDelta == 120) {
  //           _this.stage.zoomIn(1.05);
  //         } else if (e.wheelDelta == -120) {
  //           _this.stage.zoomIn(0.95);
  //         }
  //       });

  //       //连线线右键功能（链接类型）操作
  //       _this.lineMenu.mouseover(function(e) {
  //         e.stopPropagation();
  //         let text = $.trim($(e.target).text());
  //         if (text == "连线类型修改") {
  //           let menuX =
  //             parseInt(this.style.left) +
  //             $(document.getElementById("link-style-set")).width();
  //           if (menuX + _this.linkStyleSet.width() * 2 >= _this.stage.width) {
  //             menuX -= _this.linkStyleSet.width() + _this.lineMenu.width();
  //           }
  //           _this.linkLineStyleMenu
  //             .css({
  //               top: parseInt(this.style.top), //+ $(document.getElementById('link-style-set')).height(),
  //               left: menuX
  //             })
  //             .show();
  //         } else {
  //           _this.linkLineStyleMenu.hide();
  //         }
  //       });
  //       //修改节点文字方向
  //       _this.nodeTextPosMenu.mouseup(function(e) {
  //         e.stopPropagation();
  //         let text = $.trim($(e.target).text());
  //         switch (text) {
  //           case "顶部居左":
  //             _this.scene.selectedElements[0].textPosition = "Top_Left";
  //             break;
  //           case "顶部居中":
  //             _this.scene.selectedElements[0].textPosition = "Top_Right";
  //             break;
  //           case "顶部居右":
  //             _this.scene.selectedElements[0].textPosition = "Top_Right";
  //             break;
  //           case "中间居左":
  //             _this.scene.selectedElements[0].textPosition = "Middle_Left";
  //             break;
  //           case "居中":
  //             _this.scene.selectedElements[0].textPosition = "Middle_Center";
  //             break;
  //           case "中间居右":
  //             _this.scene.selectedElements[0].textPosition = "Middle_Right";
  //             break;
  //           case "底部居左":
  //             _this.scene.selectedElements[0].textPosition = "Bottom_Left";
  //             break;
  //           case "底部居中":
  //             _this.scene.selectedElements[0].textPosition = "Bottom_Center";
  //             break;
  //           case "底部居右":
  //             _this.scene.selectedElements[0].textPosition = "Bottom_Right";
  //             break;
  //         }
  //       });

  //       //===============================================
  //       //=============node节点一级菜单的操作===============
  //       //================================================
  //       //node节点鼠标点击一级菜单功能操作
  //       // _this.nodeMenu.mouseup(function(e) {
  //       //   let text = $.trim($(e.target).text());
  //       //   switch (text) {
  //       //     case "设备告警":
  //       //       break;
  //       //     case "安全事件":
  //       //       break;
  //       //     case "放大(Shift+)":
  //       //       _this.scene.selectedElements[0].scaleX += 0.2;
  //       //       _this.scene.selectedElements[0].scaleY += 0.2;
  //       //       _this.nodeMenu.hide();
  //       //       break;
  //       //     case "缩小(Shift-)":
  //       //       _this.scene.selectedElements[0].scaleX -= 0.2;
  //       //       _this.scene.selectedElements[0].scaleY -= 0.2;
  //       //       _this.nodeMenu.hide();
  //       //       break;
  //       //     default:
  //       //       break;
  //       //   }
  //       // });
  //       //node节点右键鼠标经过功能操作
  //       _this.nodeMenu.mouseover(function(e) {
  //         let text = $.trim($(e.target).text());
  //         let menuX = parseInt(this.style.left) + _this.nodeMenu.width();
  //         // 边界判断
  //         if (menuX + _this.nodeTextPosMenu.width() >= _this.stage.width) {
  //           menuX -= _this.nodeTextPosMenu.width() + _this.nodeMenu.width();
  //         }
  //         if (text === "文字位置") {
  //           _this.layoutMenu.hide();
  //           _this.nodeTextPosMenu
  //             .css({
  //               top:
  //                 parseInt(this.style.top) +
  //                 $(document.getElementById("change-node-text-pos")).height(),
  //               left: menuX
  //             })
  //             .show();
  //         } else if (text === "应用布局") {
  //           _this.nodeTextPosMenu.hide();
  //           _this.layoutMenu.find(".layout").removeClass("fa-check");
  //           _this.layoutMenu
  //             .css({
  //               top: parseInt(this.style.top),
  //               left: menuX
  //             })
  //             .show();
  //         } else {
  //           _this.layoutMenu.hide();
  //           _this.nodeTextPosMenu.hide();
  //         }
  //       });
  //     });

  //     function unit_change(data, type, spot) {
  //       var flux = data;
  //       if (flux < 1000) {
  //         flux = flux + "" + type;
  //       } else if (flux < 1000000) {
  //         flux = (flux / 1000).toFixed(spot) + "K" + type;
  //       } else if (flux < 1000000000) {
  //         flux = (flux / 1000000).toFixed(spot) + "M" + type;
  //       } else {
  //         flux = (flux / 1000000000).toFixed(spot) + "G" + type;
  //       }
  //       return flux;
  //     }
  //   },
  //   //初始化topo右键操作
  //   init() {
  //     let _this = this;
  //     _this.nodeMenu.hide();
  //     _this.lineMenu.hide();
  //     _this.mainMenu.hide();
  //     _this.nodeTips.hide();
  //     _this.linkTips.hide();
  //     _this.layoutMenu.hide();
  //     _this.nodeTextPosMenu.hide();
  //     _this.linkLineStyleMenu.hide();
  //   },
  //   //获取所有的资产列表
  //   //===================================
  //   //================左边功能键操作===================
  //   //====================================
  //   //删除节点
  //   deleteSelectedNode() {
  //     let _this = this;
  //     let nodes = _this.stage.childs[0].selectedElements;
  //     if (nodes && nodes.length > 0) {
  //       for (let i = 0; i < nodes.length; i++) {
  //         if (nodes[i].elementType == "node") {
  //           _this.scene.remove(_this.currentNode);
  //           _this.successMessage = "删除成功";
  //           _this.saveTopology();
  //         } else if (nodes[i].elementType == "link") {
  //           // _this.deleteLine();
  //         }
  //       }
  //     }
  //   },
  //   deleteNode() {
  //     alert("删除啦");
  //   },
  //   //居中
  //   showInCenter() {
  //     this.stage.centerAndZoom();
  //   },
  //   //显示全屏
  //   topoFullScreen() {
  //     var canvas = document.getElementById("topo_content");
  //     this.topo_requestFullScreen(canvas);
  //   },
  //   topo_requestFullScreen(ele) {
  //     this.isfullscreen = true;
  //     if (ele.requestFullScreen) {
  //       ele.requestFullScreen();
  //     } else if (ele.mozRequestFullScreen) {
  //       ele.mozRequestFullScreen();
  //     } else if (ele.webkitRequestFullScreen) {
  //       ele.webkitRequestFullScreen();
  //     } else if (ele.msRequestFullscreen) {
  //       ele.msRequestFullscreen();
  //     } else {
  //       this.isfullscreen = false;
  //       alert("当前浏览器不支持全屏操作！");
  //       return false;
  //     }
  //     // this.reInitTopo()
  //     return true;
  //   },
  //   //退出全屏
  //   quitFullScreen() {
  //     this.isfullscreen = false;
  //     if (document.exitFullScreen) {
  //       document.exitFullScreen();
  //     } else if (document.mozCancelFullScreen) {
  //       document.mozCancelFullScreen();
  //     } else if (document.webkitExitFullscreen) {
  //       document.webkitExitFullscreen();
  //     } else if (document.msExitFullscreen) {
  //       document.msExitFullscreen();
  //     }
  //   },
  //   checkFull() {
  //     var isFull =
  //       document.fullscreenEnabled ||
  //       window.fullScreen ||
  //       document.webkitIsFullScreen ||
  //       document.msFullscreenEnabled;
  //     if (isFull === undefined) isFull = false;
  //     return isFull;
  //   },
  //   //查找节点
  //   searchNode() {
  //     this.dialogTitle = "查找节点";
  //     this.dialogType = "searchNode";
  //     this.dialogFormVisible = true;
  //   },
  //   //=========================================
  //   //=============拓补图的操作=================
  //   //=========================================
  //   //保存
  //   saveTopology() {
  //     var scene = {
  //       elementType: "scene",
  //       id: this.scene.id,
  //       translateX: this.scene.translateX,
  //       translateY: this.scene.translateY,
  //       scaleX: this.scene.scaleX,
  //       scaleY: this.scene.scaleY
  //     };
  //     var array = [];
  //     console.log(this.scene.childs);
  //     for (let i in this.scene.childs) {
  //       var node = this.scene.childs[i];
  //       if (this.scene.childs[i].elementType == "node") {
  //         var nodeObj = {
  //           id: node.devId,
  //           elementType: "node",
  //           x: node.x,
  //           y: node.y,
  //           devIp: node.devIp,
  //           width: node.width,
  //           height: node.height,
  //           visible: node.visible,
  //           rotate: node.rotate,
  //           scaleX: node.scaleX,
  //           scaleY: node.scaleY,
  //           zIndex: node.zIndex,
  //           nodeId: node.nodeId,
  //           nodeType: node.nodeType,
  //           nodeParams: node.nodeParams,
  //           nodeImage: node.nodeImage,
  //           text: node.text,
  //           textPosition: node.textPosition,
  //           layout: node.layout,
  //           alarm: node.alarm,
  //           scene: scene.id
  //         };
  //         array.push(nodeObj);
  //       }
  //       if (this.scene.childs[i].elementType == "link") {
  //         var linkObj = {
  //           id: node.id,
  //           elementType: "link",
  //           localDevId: node.localDevId,
  //           localDevIp: node.localDevIp,
  //           localDevIfindex: node.localDevIfindex,
  //           localDevIfname: node.localDevIfname,
  //           remoteDevId: node.remoteDevId,
  //           remoteDevIp: node.remoteDevIp,
  //           remoteDevIfindex: node.remoteDevIfindex,
  //           remoteDevIfname: node.remoteDevIfname,
  //           zIndex: node.zIndex,
  //           nodeSrc: node.nodeSrc,
  //           nodeDst: node.nodeDst,
  //           lineType: node.lineType,
  //           direction: node.direction,
  //           text: node.text,
  //           linkParams: node.linkParams,
  //           strokeColor: node.strokeColor,
  //           scene: scene.id
  //         };
  //         array.push(linkObj);
  //       }
  //     }
  //     var params = {
  //       topoData: JSON.stringify(array),
  //       topoName: this.topoName,
  //       defaultTopo: this.defaultTopo,
  //       scene: JSON.stringify(scene)
  //     };
  //     if (this.operate == "edit") {
  //       // params.id = this.id;
  //       this.$axios({
  //         method: "put",
  //         url: "/stap/assetMonitorCenter/assetTopo/topo?id=" + this.id,
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         data: params
  //       }).then(res => {
  //         if (res.data.status == "success") {
  //           this.$message({
  //             type: "success",
  //             message: this.successMessage || "保存成功"
  //           });
  //           this.getAssetTopo();
  //         } else {
  //           this.$message.error(res.data.message);
  //         }
  //       });
  //     } else {
  //       this.$axios({
  //         method: "post",
  //         url: "/stap/assetMonitorCenter/assetTopo/topo",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         data: params
  //       }).then(res => {
  //         if (res.data.status == "success") {
  //           this.$message({
  //             type: "success",
  //             message: this.successMessage || "保存成功"
  //           });
  //           this.getAssetTopo();
  //         } else {
  //           this.$message.error(res.data.message);
  //         }
  //       });
  //     }
  //     this.init();
  //     this.showTools = true;
  //   },
  //   //刷新
  //   refresh() {
  //     this.getAssetTopo();
  //     this.mainMenu.hide();
  //   },
  //   //放大缩小
  //   zoom(percent) {
  //     this.stage.zoomIn(percent);
  //   },
  //   //节点放大缩小
  //   nodeZoom(type) {
  //     let _this = this;
  //     if (type == "big") {
  //       _this.scene.selectedElements[0].scaleX += 0.2;
  //       _this.scene.selectedElements[0].scaleY += 0.2;
  //       _this.nodeMenu.hide();
  //     } else if (type == "small") {
  //       _this.scene.selectedElements[0].scaleX -= 0.2;
  //       _this.scene.selectedElements[0].scaleY -= 0.2;
  //       _this.nodeMenu.hide();
  //     }
  //   },
  //   //添加连线
  //   addLine() {
  //     this.dialogTitle = "添加连线";
  //     this.dialogType = "addLine";
  //     this.dialogFormVisible = true;
  //     this.init();
  //   },
  //   //添加辅助图标
  //   addOtherImg() {
  //     this.dialogTitle = "添加辅助图标";
  //     this.dialogType = "addImg";
  //     // this.$refs["form"].resetFields();
  //     this.dialogFormVisible = true;
  //     this.init();
  //   },
  //   //============================================
  //   //=============连接线一级菜单的操作=============
  //   //============================================

  //   //删除连线
  //   deleteLine() {
  //     if (this.currentLink instanceof JTopo.Link) {
  //       this.scene.remove(this.currentLink);
  //     }
  //     this.successMessage = "删除成功";
  //     this.saveTopology();
  //   },
  //   //修改连线类型
  //   changeLineType(lineType, obj, direction) {
  //     var oldLink = obj;
  //     this.scene.remove(obj);
  //     var nodeA = oldLink.nodeA;
  //     var nodeZ = oldLink.nodeZ;
  //     //重新绘制连线drawa
  //     var c = null;
  //     if (lineType == "line") {
  //       c = new JTopo.Link(nodeA, nodeZ);
  //       c.lineType = "line";
  //     }
  //     if (lineType == "foldLine") {
  //       c = new JTopo.FoldLink(nodeA, nodeZ);
  //       c.bundleOffset = 40;
  //       c.direction = direction;
  //       c.lineType = "foldLine";
  //     }
  //     if (lineType == "flexLine") {
  //       c = new JTopo.FlexionalLink(nodeA, nodeZ);
  //       c.offsetGap = 40;
  //       c.direction = direction;
  //       c.lineType = "flexLine";
  //     }
  //     if (lineType == "curveLine") {
  //       c = new JTopo.CurveLink(nodeA, nodeZ);
  //       c.lineType = "curveLine";
  //     }
  //     c.alpha = 1;
  //     c.shadow = false;
  //     c.font = "12px Consolas";
  //     c.arrowsRadius = 0;
  //     c.lineWidth = 1.5;
  //     c.bundleGap = 0;
  //     c.eagleEyeVsibleDefault = false;

  //     c.id = oldLink.id;
  //     c.strokeColor = oldLink.strokeColor;
  //     c.lineClass = oldLink.lineClass;
  //     c.nodeSrc = oldLink.nodeSrc;
  //     c.nodeDst = oldLink.nodeDst;
  //     c.localDevId = oldLink.localDevId;
  //     c.localDevIp = oldLink.localDevIp;
  //     c.localDevIfindex = oldLink.localDevIfindex;
  //     c.localDevIfname = oldLink.localDevIfname;
  //     c.remoteDevId = oldLink.remoteDevId;
  //     c.remoteDevIp = oldLink.remoteDevIp;
  //     c.remoteDevIfindex = oldLink.remoteDevIfindex;
  //     c.remoteDevIfname = oldLink.remoteDevIfname;
  //     this.scene.add(c);
  //     this.lineMenu.hide();
  //     this.linkLineStyleMenu.hide();
  //   },
  //   //============================================
  //   //=============节点一级菜单的操作=============
  //   //============================================
  //   nodeSet() {
  //     this.dialogTitle = "节点设置";
  //     this.dialogType = "nodeSet";
  //     this.dialogFormVisible = true;
  //   },
  //   handleNodeClick(data) {
  //     this.operate = "edit"; //当切换拓扑图的时候那么就是进行编辑了
  //     this.id = data.id;
  //     this.topoName = data.label;
  //     this.defaultTopo = data.defaultTopo;
  //     this.createInit(JSON.parse(data.topoData), JSON.parse(data.scene));

  //     this.init();
  //   },
  //   //新增一个新的拓扑图
  //   addNewTopo() {
  //     this.dialogAddFormVisible = true;
  //   },
  //   addTopo(formName) {
  //     this.$refs[formName].validate(valid => {
  //       if (valid) {
  //         this.dialogAddFormVisible = false;
  //         this.topoName = this.addFrom.topoName;
  //         this.init();
  //         this.operate = "add";
  //         this.defaultTopo = 0;
  //         this.showTools = false;
  //         this.createInit();
  //       } else {
  //         return false;
  //       }
  //     });
  //   },
  //   quit(formName) {
  //     this.dialogAddFormVisible = false;
  //     this.$refs[formName].resetFields();
  //   },
  //   //删除拓扑图
  //   removeTopo() {
  //     this.$confirm("你确定要删除这张拓扑图吗，是否继续?", "提示", {
  //       confirmButtonText: "确定",
  //       cancelButtonText: "取消",
  //       type: "warning"
  //     })
  //       .then(() => {
  //         this.$axios({
  //           method: "delete",
  //           url: "/stap/assetMonitorCenter/assetTopo/topo?id=" + this.id,
  //           headers: {
  //             "Content-Type": "application/json"
  //           }
  //         }).then(res => {
  //           if (res.data.status == "success") {
  //             this.$message({
  //               type: "success",
  //               message: "删除成功"
  //             });
  //             this.topoName = "";
  //             this.id = "";
  //             this.getAssetTopo();
  //           } else {
  //             this.$message.error(res.data.message);
  //           }
  //         });
  //       })
  //       .catch(() => {
  //         // this.$message({
  //         //   type: "info",
  //         //   message: "已取消删除!"
  //         // });
  //       });
  //   },
  //   //设为默认页，展示的也是默认页的拓扑图
  //   setDefaultPage() {
  //     this.defaultTopo = 1;
  //     this.saveTopology();
  //   },

  //   //=================弹框保存操作================
  //   cancel() {
  //     this.$refs["form"].resetFields();
  //     this.dialogFormVisible = false;
  //   },
  //   onOk() {
  //     //新增设备
  //     if (this.dialogType == "addImg") {
  //       var flag = true;
  //       this.$refs.form.validateField("nodeName", errMsg => {
  //         if (errMsg) {
  //           flag = false;
  //           return false;
  //         }
  //       });
  //       this.$refs.form.validateField("nodeImg", err => {
  //         if (err) {
  //           flag = false;
  //           return false;
  //         }
  //       });
  //       if (flag) {
  //         var text = this.form.nodeName;
  //         var node = this.getNodeByKey("text", text);
  //         var devIp = this.getNodeDevIp("assetName", text);
  //         if (node != null) {
  //           this.$message.error("名称为[" + text + "]的节点已存在！");
  //           return;
  //         }
  //         node = new JTopo.Node();
  //         //节点坐标，获取scene偏移量，放置于可见视野位置100，100
  //         var x = -this.scene.translateX + 100;
  //         var y = -this.scene.translateY + 100;
  //         node.setLocation(x, y);
  //         switch (this.form.nodeImg) {
  //           case 1:
  //             node.setImage("/img/topo_cloud1.png", true);
  //             node.nodeImage = "topo_cloud1.png";
  //             node.scaleX = 1;
  //             node.scaleY = 1;
  //             break;
  //           case 2:
  //             node.setImage("/img/topo_build.png");
  //             node.nodeImage = "topo_build.png";
  //             node.scaleX = 1;
  //             node.scaleY = 1;
  //             break;
  //           case 3:
  //             node.setImage("/img/topo_dpx.png");
  //             node.nodeImage = "topo_dpx.png";
  //             node.width = 27;
  //             node.height = 33;
  //             break;
  //           case 4:
  //             node.setImage("/img/topo_inac-x.png");
  //             node.nodeImage = "topo_inac-x.png";
  //             node.width = 34;
  //             node.height = 24;
  //             break;
  //           case 5:
  //             node.setImage("/img/topo_sw.png");
  //             node.nodeImage = "topo_sw.png";
  //             node.width = 34;
  //             node.height = 24;
  //             break;
  //           case 6:
  //             node.setImage("/img/topo_sw.png");
  //             node.nodeImage = "topo_sw.png";
  //             node.width = 34;
  //             node.height = 23;
  //             break;
  //           case 7:
  //             node.setImage("/img/topo_wifiAC.png");
  //             node.nodeImage = "topo_wifiAC.png";
  //             node.width = 34;
  //             node.height = 27;
  //             break;
  //         }
  //         node.nodeId = generateUUID();
  //         node.nodeType = "custom";
  //         node.devIp = devIp;
  //         node.text = text;
  //         this.scene.add(node);
  //         //保存数据
  //         var nodeObj = [
  //           {
  //             id: node.devId,
  //             elementType: "node",
  //             x: node.x,
  //             y: node.y,
  //             devIp: devIp,
  //             width: node.width,
  //             height: node.height,
  //             visible: node.visible,
  //             rotate: node.rotate,
  //             scaleX: node.scaleX,
  //             scaleY: node.scaleY,
  //             zIndex: node.zIndex,
  //             nodeId: node.nodeId,
  //             nodeType: node.nodeType,
  //             nodeParams: node.nodeParams,
  //             nodeImage: node.nodeImage,
  //             text: node.text,
  //             textPosition: node.textPosition,
  //             layout: node.layout,
  //             scene: this.scene.id
  //           }
  //         ];
  //         this.dialogFormVisible = false;
  //         this.saveTopology();
  //       }
  //     }
  //     //添加连线
  //     else if (this.dialogType == "addLine") {
  //       //新验证起始设备是否选择了
  //       var flag = true;
  //       this.$refs.form.validateField("localDevIp", errMsg => {
  //         if (errMsg) {
  //           flag = false;
  //           return false;
  //         }
  //       });
  //       this.$refs.form.validateField("remoteDevIp", errMsg => {
  //         if (errMsg) {
  //           flag = false;
  //           return false;
  //         }
  //       });
  //       this.$refs.form.validateField("lineType", errMsg => {
  //         if (errMsg) {
  //           flag = false;
  //           return false;
  //         }
  //       });
  //       if (!flag) {
  //         return;
  //       }
  //       var localDevIp = this.form.localDevIp;
  //       var remoteDevIp = this.form.remoteDevIp;

  //       if (localDevIp == remoteDevIp) {
  //         this.$message.error("起始设备和目的设备重复！");
  //         return;
  //       }

  //       var nodeSrc = this.getNodeByKey("nodeId", localDevIp);
  //       var nodeDst = this.getNodeByKey("nodeId", remoteDevIp);
  //       var lineType = this.form.lineType;
  //       switch (lineType) {
  //         case 1:
  //           var link = new JTopo.Link(nodeSrc, nodeDst);
  //           link.lineType = "line";
  //           break;
  //         case 2:
  //           var link = new JTopo.FoldLink(nodeSrc, nodeDst);
  //           link.direction = "horizontal";
  //           link.lineType = "foldLine";
  //           link.bundleOffset = this.linkOffsetGap; // 折线拐角处的长度
  //           break;
  //         case 3:
  //           var link = new JTopo.FoldLink(nodeSrc, nodeDst);
  //           link.direction = "vertical";
  //           link.lineType = "foldLine";
  //           link.bundleOffset = this.linkOffsetGap; // 折线拐角处的长度
  //           break;
  //         case 4:
  //           var link = new JTopo.FlexionalLink(nodeSrc, nodeDst);
  //           link.direction = "horizontal";
  //           link.lineType = "flexLine";
  //           link.offsetGap = this.linkOffsetGap;
  //           break;
  //         case 5:
  //           var link = new JTopo.FlexionalLink(nodeSrc, nodeDst);
  //           link.direction = "vertical";
  //           link.lineType = "flexLine";
  //           link.offsetGap = this.linkOffsetGap;
  //       }
  //       link.id = generateUUID();
  //       link.nodeSrc = nodeSrc.nodeId;
  //       link.nodeDst = nodeDst.nodeId;
  //       link.localDevId = nodeSrc.devId;
  //       link.localDevIp = nodeSrc.devIp;
  //       link.localDevIfindex = 0;
  //       //link.localDevIfindex = 0;
  //       link.localDevIfname = "";
  //       link.remoteDevId = nodeDst.devId;
  //       link.remoteDevIp = nodeDst.devIp;
  //       link.remoteDevIfindex = 0;
  //       //link.remoteDevIfindex = 0;
  //       link.remoteDevIfname = "";
  //       if (lineType != "curveLine") {
  //         link.arrowsRadius = 0;
  //       }
  //       link.strokeColor = "4,255,23";
  //       link.lineWidth = 1.5;
  //       scene: this.scene.id;
  //       this.scene.add(link);
  //       this.dialogFormVisible = false;
  //       this.saveTopology();
  //     }

  //     //调用保存接口
  //   },
  //   getNodeByKey(key, value) {
  //     let node = null;
  //     this.stage.childs.forEach(function(s) {
  //       s.childs.forEach(function(n) {
  //         if (n.elementType === "node" && n[key] === value) {
  //           node = n;
  //           return node;
  //         }
  //       });
  //     });
  //     return node;
  //   },
  //   getNodeDevIp(key, value) {
  //     let devIp = null;
  //     this.assetList.forEach(function(item) {
  //       if (item[key] === value) {
  //         devIp = item.ip;
  //         return devIp;
  //       }
  //     });
  //     return devIp;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
#canvas {
  background: #fff url("./img/topo_backimg2.png");
}
</style>
