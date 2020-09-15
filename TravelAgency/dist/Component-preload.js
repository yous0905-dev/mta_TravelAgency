//@ui5-bundle travelagency/travelagency/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"travelagency/travelagency/Component.js":function(){sap.ui.define(["sap/suite/ui/generic/template/lib/AppComponent"],function(e){return e.extend("travelagency.travelagency.Component",{metadata:{manifest:"json"}})});
},
	"travelagency/travelagency/i18n/ListReport/ZC_STRAVAG_OVP/i18n.properties":'# This is the resource bundle for Travel Agency#specific keys+text combination that overwrite template keys+text\n#scan the original i18n of the template component for the keys\n#you can find it by starting the application in the WebIDE with a run configuration that has unchecked \'open with frame\'\n#and modify the URL in the browser to /resources/sap/suite/ui/generic/template/<template component name>/i18n/i18n.properties\n#<EXISTING_KEY>=<new text for the key>\n#',
	"travelagency/travelagency/i18n/i18n.properties":'# This is the resource bundle for Travel Agency#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Travel Agency\n\n#YDES: Application description\nappDescription=Search Travel Agency\n\n',
	"travelagency/travelagency/localService/ZSB_STRAVAG_OVP_VAN.xml":'<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0"><edmx:Reference Uri="../../catalogservice;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_COMMON\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="com.sap.vocabularies.Common.v1" Alias="Common"/></edmx:Reference><edmx:Reference Uri="../../catalogservice;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_UI\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="com.sap.vocabularies.UI.v1" Alias="UI"/></edmx:Reference><edmx:Reference\n\t\tUri="../../catalogservice;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_COMMUNICATION\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="com.sap.vocabularies.Communication.v1" Alias="Communication"/></edmx:Reference><edmx:Reference Uri="../../../sap/zsb_stravag_ovp/$metadata"><edmx:Include Namespace="ZSB_STRAVAG_OVP" Alias="SAP"/></edmx:Reference><edmx:DataServices><Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="zsb_stravag_ovp_van.v1"><Annotations Target="cds_zsd_stravag_ovp.ZC_STRAVAG_OVPType"><Annotation Term="UI.Facets"><Collection><Record Type="UI.ReferenceFacet"><PropertyValue Property="Label" String="Travel Agency"/><PropertyValue Property="ID" String="Stravelag"/><PropertyValue Property="Target" AnnotationPath="@UI.Identification"/></Record></Collection></Annotation><Annotation Term="UI.HeaderInfo"><Record><PropertyValue Property="TypeName" String="Travel Agency"/><PropertyValue Property="TypeNamePlural" String="Travel Agencies"/><PropertyValue Property="Title"><Record Type="UI.DataField"><PropertyValue Property="Value" Path="AgencyId"/></Record></PropertyValue></Record></Annotation><Annotation Term="UI.Identification"><Collection><Record Type="UI.DataField"><PropertyValue Property="Value" Path="AgencyId"/></Record><Record Type="UI.DataField"><PropertyValue Property="Value" Path="Name"/></Record><Record Type="UI.DataField"><PropertyValue Property="Value" Path="City"/></Record></Collection></Annotation><Annotation Term="UI.LineItem"><Collection><Record Type="UI.DataField"><PropertyValue Property="Value" Path="AgencyId"/><Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Medium"/></Record><Record Type="UI.DataField"><PropertyValue Property="Value" Path="Name"/><Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Medium"/></Record><Record Type="UI.DataField"><PropertyValue Property="Value" Path="City"/><Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Medium"/></Record></Collection></Annotation><Annotation Term="UI.SelectionFields"><Collection><PropertyPath>AgencyId</PropertyPath></Collection></Annotation></Annotations></Schema></edmx:DataServices></edmx:Edmx>',
	"travelagency/travelagency/localService/metadata.xml":'<edmx:Edmx xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"\n\txmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:sap="http://www.sap.com/Protocols/SAPData" Version="1.0"><edmx:Reference xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"\n\t\tUri="./IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_COMMON\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="com.sap.vocabularies.Common.v1" Alias="Common"/></edmx:Reference><edmx:Reference xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"\n\t\tUri="./IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_CAPABILITIES\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="Org.OData.Capabilities.V1" Alias="Capabilities"/></edmx:Reference><edmx:Reference xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"\n\t\tUri="./IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_COMMUNICATION\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="com.sap.vocabularies.Communication.v1" Alias="Communication"/></edmx:Reference><edmx:Reference xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"\n\t\tUri="./IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_AGGREGATION\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="Org.OData.Aggregation.V1" Alias="Aggregation"/></edmx:Reference><edmx:Reference xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"\n\t\tUri="./IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName=\'%2FIWBEP%2FVOC_PERSONALDATA\',Version=\'0001\',SAP__Origin=\'\')/$value"><edmx:Include Namespace="com.sap.vocabularies.PersonalData.v1" Alias="PersonalData"/></edmx:Reference><edmx:DataServices m:DataServiceVersion="2.0"><Schema xmlns="http://schemas.microsoft.com/ado/2008/09/edm" Namespace="cds_zsd_stravag_ovp" xml:lang="en" sap:schema-version="1"><EntityType Name="ZC_STRAVAG_OVPType" sap:label="Stravelag projection view - Processor" sap:content-version="1"><Key><PropertyRef Name="AgencyId"/></Key><Property Name="AgencyId" Type="Edm.String" Nullable="false" MaxLength="8" sap:display-format="NonNegative" sap:label="Agency No."\n\t\t\t\t\tsap:quickinfo="Travel Agency Number"/><Property Name="Name" Type="Edm.String" MaxLength="25" sap:label="Travel agency name"/><Property Name="Street" Type="Edm.String" MaxLength="30" sap:label="Street"/><Property Name="Postcode" Type="Edm.String" MaxLength="10" sap:display-format="UpperCase" sap:label="Postal Code"/><Property Name="City" Type="Edm.String" MaxLength="25" sap:label="City"/><Property Name="Country" Type="Edm.String" MaxLength="3" sap:display-format="UpperCase" sap:label="Country" sap:quickinfo="Country Code"/><Property Name="Region" Type="Edm.String" MaxLength="3" sap:display-format="UpperCase" sap:label="Region"/></EntityType><EntityContainer Name="cds_zsd_stravag_ovp_Entities" m:IsDefaultEntityContainer="true" sap:message-scope-supported="true"\n\t\t\t\tsap:supported-formats="atom json xlsx"><EntitySet Name="ZC_STRAVAG_OVP" EntityType="cds_zsd_stravag_ovp.ZC_STRAVAG_OVPType" sap:creatable="false" sap:updatable="false"\n\t\t\t\tsap:deletable="false" sap:content-version="1"/></EntityContainer><Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="cds_zsd_stravag_ovp.cds_zsd_stravag_ovp_Entities"><Annotation Term="Aggregation.ApplySupported"><Record><PropertyValue Property="Transformations"><Collection><String>aggregate</String><String>groupby</String><String>filter</String></Collection></PropertyValue><PropertyValue Property="Rollup" EnumMember="None"/></Record></Annotation></Annotations><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="self" href="./sap/ZSB_STRAVAG_OVP/$metadata"/><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="latest-version" href="./sap/ZSB_STRAVAG_OVP/$metadata"/></Schema></edmx:DataServices></edmx:Edmx>',
	"travelagency/travelagency/localService/mockserver.js":function(){sap.ui.define(["sap/ui/core/util/MockServer","sap/base/Log","sap/base/util/UriParameters","sap/ui/util/XMLHelper"],function(e,t,r,a){"use strict";var i,n="travelagency/travelagency/",o=n+"localService/mockdata";return{init:function(){var s=new r(window.location.href),u=sap.ui.require.toUrl(o),p=sap.ui.require.toUrl(n+"manifest"+".json"),c="ZC_STRAVAG_OVP",l=s.get("errorType"),f=l==="badRequest"?400:500,d=jQuery.sap.syncGetJSON(p).data,g=d["sap.app"].dataSources,m=g.mainService,h=sap.ui.require.toUrl(n+m.settings.localUri.replace(".xml","")+".xml"),v=/.*\/$/.test(m.uri)?m.uri:m.uri+"/",x=m.settings.annotations;i=new e({rootUri:v});e.config({autoRespond:true,autoRespondAfter:s.get("serverDelay")||1e3});i.simulate(h,{sMockdataBaseUrl:u,bGenerateMissingMockData:true});var y=i.getRequests(),U=function(e,t,r){r.response=function(r){r.respond(e,{"Content-Type":"text/plain;charset=utf-8"},t)}};if(s.get("metadataError")){y.forEach(function(e){if(e.path.toString().indexOf("$metadata")>-1){U(500,"metadata Error",e)}})}if(l){y.forEach(function(e){if(e.path.toString().indexOf(c)>-1){U(f,l,e)}})}i.start();t.info("Running the app with mock data");if(x&&x.length>0){x.forEach(function(t){var r=g[t],i=r.uri,o=sap.ui.require.toUrl(n+r.settings.localUri.replace(".xml","")+".xml");new e({rootUri:i,requests:[{method:"GET",path:new RegExp("([?#].*)?"),response:function(e){sap.ui.require("jquery.sap.xml");var t=jQuery.sap.sjax({url:o,dataType:"xml"}).data;e.respondXML(200,{},a.serialize(t));return true}}]}).start()})}},getMockServer:function(){return i}}});
},
	"travelagency/travelagency/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"travelagency.travelagency","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","tags":{"keywords":[]},"dataSources":{"mainService":{"uri":"/HDI_OP/sap/opu/odata/sap/ZSB_STRAVAG_OVP/","type":"OData","settings":{"annotations":["ZSB_STRAVAG_OVP_VAN"],"localUri":"localService/metadata.xml"}},"ZSB_STRAVAG_OVP_VAN":{"uri":"/HDI_OP/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Annotations(TechnicalName=\'ZSB_STRAVAG_OVP_VAN\',Version=\'0001\')/$value/","type":"ODataAnnotation","settings":{"localUri":"localService/ZSB_STRAVAG_OVP_VAN.xml"}}},"offline":false,"sourceTemplate":{"id":"html5moduletemplates.smartTemplateModule","version":"1.40.12"},"crossNavigation":{"inbounds":{"intent1":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"travelagency","action":"display"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"resources":{"js":[],"css":[]},"dependencies":{"minUI5Version":"1.65.6","libs":{},"components":{}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"i18n|sap.suite.ui.generic.template.ListReport|ZC_STRAVAG_OVP":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/ListReport/ZC_STRAVAG_OVP/i18n.properties"},"i18n|sap.suite.ui.generic.template.ObjectPage|ZC_STRAVAG_OVP":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/ObjectPage/ZC_STRAVAG_OVP/i18n.properties"},"":{"dataSource":"mainService","preload":true,"settings":{"defaultBindingMode":"TwoWay","defaultCountMode":"Inline","refreshAfterChange":false,"metadataUrlParams":{"sap-value-list":"none"}}}},"extends":{"extensions":{}},"contentDensities":{"compact":true,"cozy":true}},"sap.ui.generic.app":{"_version":"1.3.0","settings":{"forceGlobalRefresh":false,"objectPageHeaderType":"Dynamic","showDraftToggle":false},"pages":{"ListReport|ZC_STRAVAG_OVP":{"entitySet":"ZC_STRAVAG_OVP","component":{"name":"sap.suite.ui.generic.template.ListReport","list":true,"settings":{"condensedTableLayout":true,"smartVariantManagement":true,"enableTableFilterInPageVariant":true}},"pages":{"ObjectPage|ZC_STRAVAG_OVP":{"entitySet":"ZC_STRAVAG_OVP","component":{"name":"sap.suite.ui.generic.template.ObjectPage"}}}}}},"sap.platform.hcp":{"uri":""}}'
}});
