/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2013. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.mobile.widgets', 'DojoMobileTabContainer',
	'dojo.mobile.widgets', 'DojoMobileContainer',
	'div',
{
	"standardEvents" : [
	    "click", "mousedown", "mouseup",
	    "mouseover", "mousemove",
	    "mouseout", "change"
	],
	"eglBaseClass" : "eglMblTabContainer",
	"constructor" : function() {		
		var _this = this;
		this.selection	= 1;
		this.acceptChildrenTypes = { "dojo.mobile.widgets.DojoMobileTab" : true };
		this.started = false;
		this.segmentedControl = true;
		require(
			[
			 	"dojox/mobile/TabBar",
			 	"dojo/_base/sniff",
			 	"dojo/mobile/utility/BrowserUtility"
			], 
			function( tb, has, bu ){
				_this._safeRender();
				_this.bu = bu;
			}
		);	
	},
	"getChildrenLength" : function(){
		if( this.tabBarWidget ){
			var btnWidgets = this.tabBarWidget.getChildren();
			return btnWidgets ? btnWidgets.length : 0;
		}
		return 0;
	},  
	"_setChildren" : function(){
		var _this = this, i = 0, j = 0, toDelete = true, toDeleteArr = [], toStartup = [],
			widgetChildren = _this.tabBarWidget.getChildren(),
			children = _this.children;
		
		_this.selection = _this.getSelection();
		if( widgetChildren ){
			for( i = 0; i < widgetChildren.length; ++ i ){
				toDelete = true;
				for( j = 0; j < children.length; ++ j ){
					if( widgetChildren[i] == children[j].tabBtnWidget ){
						toDelete = false;
						break;
					}
				}
				if( toDelete ){ toDeleteArr.push(i); }
			}
			
			var curSel = _this.selection - 1;
			
			// get the max unselected index previous to the specified index
			function getNewSel( index ){
				preSel	 = toDeleteArr[index]-1;
				preIndex = index - 1;
				
				if( preIndex < 0 ){ return 0; }
				
				if( toDeleteArr[preIndex] != preSel )
					return preSel;
				else
					return getNewSel( preIndex );
			}

			if( toDeleteArr.length > 0 ){
				toDeleteArr.sort();
				for( i = 0; i < toDeleteArr.length; ++ i ){
					if( toDeleteArr[i] == curSel ){
						newSel = getNewSel( i );
						_this.selection = ++newSel;
						break;
					} 
				}
				for( i = 0; i < toDeleteArr.length; ++ i ){
					var viewId = widgetChildren[toDeleteArr[i]].get('moveTo');
					var viewWidget = dijit.byId(viewId);
					_this.tabBarWidget.removeChild( toDeleteArr[i] );
					viewWidget && viewWidget.domNode.parentNode
					&& viewWidget.domNode.parentNode.removeChild( 
						viewWidget.domNode
					);
					
					// @Smyle: Since these deleted widgets may be referenced by other
					// widgets, EGL will not automatically destroy them, it is
					// up to user to manually destroy a widget to free the memory
					/* if( viewWidget ) viewWidget.destroy(false);
					 * widgetChildren[toDeleteArr[i]].destroy(false);
					 */
					if( _this.selection > 1 && toDeleteArr[i] <= _this.selection ){
						-- _this.selection;
					}
				}
			}
		}
		
		for( i = 0; i < _this.children.length; ++ i ){
			if ( children[i].tabBtnWidget && children[i].tabViewWidget ){
				if( _this.tabBarWidget.getIndexOfChild( children[i].tabBtnWidget ) == -1 ){	
					_this.tabBarWidget.addChild( children[i].tabBtnWidget, i );
					_this.tabContainerNode.appendChild( children[i].tabViewWidget.domNode );
					toStartup.push(i);
					if( i < _this.selection ){
						++ _this.selection;
					}
				}
			}
			else{
				children[i].parent = _this;
			}
		}	
		
		_this.setSelection( _this.selection );
		if( toStartup.length > 0 ){
			for( i = 0; i < toStartup.length; ++ i ){
				children[toStartup[i]].tabViewWidget.startup();
			}
		}
		
		if( _this._tabPosition == "Bottom" ){
			_this.fixBottom();
		}
		
		// work around layout problem after we added & removed tabs
		_this.resize();
	},
	"setChildren" : function(children) {
		var _this = this;
		_this.children = _this.getShallowCopy(children);
		_this.checkChildrenType();
		
		debugger;
		if( _this.tabBarWidget && _this.children ){
			_this.synchronor.wait(
				_this.children, 'SYN_READY',
				function(){
					_this._setChildren();
				}
			);
		}
	}, 
	"addTab" : function(tab, tabindex){
		if( tabindex < 1 || tabindex > this.children.length + 1 )
			egl.createRuntimeException( this.eze$$typename+".addTab : Invalid tab index " + tabIndex );
		this.children.splice(tabindex, 0, tab);
		this.setChildren(this.children);
	},
	"removeTab" : function(tabindex) {
		if( tabindex < 1 || tabindex > this.children.length )
			egl.createRuntimeException( this.eze$$typename+".addTab : Invalid tab index " + tabIndex );

		this.children.splice( tabindex-1, 1 );
		this.setChildren	( this.children );
	},
	"appendChild" : function(child) {
		this.children = this.children || [];
		this.children.push(child);
		this.setChildren(this.children);
	},
	"appendChildren" : function(children) {
		this.children = this.children || [];
		for(var n=0; n<children.length; n++){
			this.children.push(children[n]);
		}
		this.setChildren(this.children);

	},
	"removeChild" : function(child) {		
		if(!this.children){
			return;
		}
		for (var n=0; n< this.children.length; n++) {
			if(this.children[n] == child){
				this.removeTab(n+1);
				return;
			}
		}
		throw this.eze$$typename+".removeChild: the child is not found.";
	},
	"removeChildren" : function(){
		this.children = [];
		if(this.dojoWidget){
			while(this.dojoWidget.domNode.firstChild){
				this.dojoWidget.domNode.removeChild(this.dojoWidget.domNode.firstChild);
			}
		}
	},
	"resize" : function(){
		var _this = this, i = _this.getSelection() - 1;
		_this.tabBarWidget &&  _this.tabBarWidget.resize && _this.tabBarWidget.resize();
		_this.children && _this.children[i] && _this.children[i].tabViewWidget 
			&& _this.children[i].tabViewWidget.resize
			&& _this.children[i].tabViewWidget.resize();
	},
	"createDojoWidget" : function(parent) {
		var _this = this, tabBarNode = document.createElement('ul');
		if( this._class ){ parent.className = parent.className + ' ' + this._class; }
		
		if( !tabBarNode ){ egl.createRuntimeException("ERROR IN CREATING TABBAR"); }
		
		_this.tabContainerNode = parent;
		_this.containerNode    = parent;
		
		if( _this._tabPosition == "Fixed Bottom" ){
			tabBarNode.style.position = "fixed";
			tabBarNode.style.left = 0;
			tabBarNode.style.bottom = 0;
			tabBarNode.style.right = 0;
			tabBarNode.style.zIndex = "10000";
			_this.tabContainerNode.appendChild( tabBarNode );
		}
		else if( _this._tabPosition == "Fixed Top" ){
			tabBarNode.style.position = "fixed";
			tabBarNode.style.left = 0;
			tabBarNode.style.top = 0;
			tabBarNode.style.right = 0;
			tabBarNode.style.zIndex = "10000";
			_this.tabContainerNode.appendChild( tabBarNode );
		}
		else{
			_this.tabContainerNode.appendChild( tabBarNode );
		}
		
		//tabBarNode.id = _this.id || "";
		var style = {};
		if( _this.segmentedControl ){ style.barType = "segmentedControl"; }
		_this.tabBarWidget = new dojox.mobile.TabBar( style, tabBarNode );
		_this.dojoWidget = _this.tabBarWidget;
		
		require( ["dojo/mobile/utility/Synchronor" , "dojo/on"],
			function( synchronor, on ){
				synchronor.trigger( _this, 'SYN_READY' );
				synchronor.wait(
					_this.children, 'SYN_READY',
					function(){
						for( var i = 0; i < _this.children.length; ++ i ){
							if( _this.children[i].tabBtnWidget && _this.children[i].tabViewWidget ) {
								_this.tabBarWidget.addChild(_this.children[i].tabBtnWidget);
								if( _this._tabPosition != "Bottom" ){
									_this.tabContainerNode.appendChild(_this.children[i].tabViewWidget.domNode);
								}
								else{
									_this.tabContainerNode.insertBefore(
										_this.children[i].tabViewWidget.domNode, tabBarNode
									);
								}
							}
							else{
								_this.children[i].parent = _this;
							}
						}
						// initially select
						_this.setSelection( _this.selection );
						
						if( _this.tabBarWidget._started ){
							_this.tabBarWidget.resize();
						}
						else{
							_this.tabBarWidget.startup();
						}
						
						for( var i = 0; i < _this.children.length; ++ i ){
							if( _this.children[i].tabViewWidget ){
								_this.children[i].tabViewWidget.startup();	
							}
						}
						
						// visually select
						_this.started = true;
					}
				);
			}
		);
		
		// fix ugly eze$domElement rewritten problem by default copyAttribute
		var oldCopyAttribute = _this.copyAttribute;
		_this.copyAttribute = function(){
			oldCopyAttribute.apply( _this, arguments );
			_this.eze$$DOMElement = _this.containerNode;
		};
	},
	"fixBottom" : function(){
		var _this = this;
		for( var i = 0; i < _this.tabContainerNode.childNodes.length; ++ i )
			if( _this.tabContainerNode.childNodes[i] == _this.tabBarWidget.domNode 
					&& i != (_this.tabContainerNode.childNodes.length-1) ){
				_this.tabContainerNode.removeChild( _this.tabBarWidget.domNode );
				_this.tabContainerNode.appendChild( _this.tabBarWidget.domNode );
				break;
			}
		
	},
	"getSelection" : function(){
		var widgetChildren = this.tabBarWidget.getChildren();
		for( var i = 0; i < widgetChildren.length; ++ i )
			if( dojo.hasClass( widgetChildren[i].domNode, "mblTabButtonSelected" ) ){
				return i+1;
			}
		return 0;
	},	
	// 1 based index selection
	"setSelection": function(selection){
		var _this = this;
		if ( selection < 0 ){
			selection = 1;
		}
		if( _this.tabBarWidget && _this.children && selection > _this.children.length ){
			selection = _this.children.length;
		}
		_this.selection = selection;
		selection = selection - 1;
		if( _this.tabBarWidget && _this.children && _this.children.length > 0 ){
			// Initially Select
			if( _this.started == false ){
				for( var i = 0; i< _this.children.length; i++ ){
					_this.children[i].tabViewWidget.domNode.style.visibility = "visible";
					if( i == selection ){
						_this.children[i].tabBtnWidget.set( 'selected', true );
						_this.children[i].tabViewWidget._visible = true;
						_this.children[i].tabViewWidget.domNode.style.display = '';
						_this.selection = selection + 1;
						continue;
					} 
					_this.children[i].tabBtnWidget.set( 'selected', false) ;
					_this.children[i].tabViewWidget.domNode.style.display = 'none';
					_this.children[i].tabViewWidget._visible = false;
				}
				if( _this.children.length <= selection ){
					_this.children[_this.children.length].tabBtnWidget.set( 'selected', true );
					_this.children[_this.children.length].tabViewWidget.domNode.style.display = '';
					_this.children[_this.children.length].tabViewWidget._visible = true;
					_this.selection = _this.children.length;
				}
				else if( selection < 0 ){
					_this.children[0].tabBtnWidget.set( 'selected', true );
					_this.children[0].tabViewWidget.domNode.style.display = '';
					_this.children[0].tabViewWidget._visible = true;
					_this.selection = 1;
				}
			}
			// Visually Select
			else{
				for( var i = 0; i< _this.children.length; i++ ){
					_this.children[i].tabViewWidget._visible = false;
					_this.children[i].tabViewWidget.domNode.style.visibility = "visible";
					_this.children[i].tabViewWidget.domNode.style.display = 'none';
				}
				
				if( _this.children.length <= selection ){
					_this.children[_this.children.length].tabViewWidget._visible = true;
					_this.children[_this.children.length].tabViewWidget.domNode.style.display = '';
					_this._defaultClickTabBtn( _this.children.length );
					_this.selection = _this.children.length;
				}
				else if( selection < 0 ){
					_this.children[0].tabViewWidget._visible = true;
					_this._defaultClickTabBtn( 0 );
					_this.children[0].tabViewWidget.domNode.style.display = '';
					_this.selection = 1;				
				}
				else{
					_this.children[selection].tabViewWidget._visible = true;
					_this._defaultClickTabBtn( selection );
					_this.children[selection].tabViewWidget.domNode.style.display = '';
					_this.selection = selection + 1;				
				}
			}
		}
	},
	"_defaultClickTabBtn" : function( idx ){
		this.bu && this.children[idx] && this.children[idx].tabBtnWidget 
			&& this.children[idx].tabBtnWidget._onClick( this.bu.getEvent('click') );
	},
	"setID" : function(id) {
		if(id && id!="undefined"){
			this.id = id;
		}else{
			this.id = "";
		}
	},
	"setSegmentedControl" : function( status ){
		this.segmentedControl = status;
	},
	"getSegmentedControl" : function(){
		return this.segmentedControl || false;
	},
	"getFixedBottom" : function(){
		return this._fixedBottom;
	},
	"setFixedBottom" : function( status ){
		this._fixedBottom = status;
	},
	"getTabPosition" : function(){
		return this._tabPosition;
	},
	"setTabPosition" : function( newLayout ){
		this._tabPosition = newLayout;
	},
	"getOnTabSelected" : function() { 
		return this.onTabSelected || (this.onTabSelected = []); 
	},
	"setOnTabSelected" : function() { 
		throw egl.eglx.ui.rui.Widget.ErrorMessageForEventHandlers; 
	}
});
