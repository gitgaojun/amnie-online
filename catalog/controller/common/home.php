<?php
class ControllerCommonHome extends Controller {
	public function index() {
		$this->document->setTitle($this->config->get('config_meta_title'));
		$this->document->setDescription($this->config->get('config_meta_description'));
		$this->document->setKeywords($this->config->get('config_meta_keyword'));

		if (isset($this->request->get['route'])) {
			$this->document->addLink($this->config->get('config_url'), 'canonical');
		}

		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');

        $homeSaleCategorie1 = $this->model_catalog_category->getHomeSaleCategorie('home1');
        $homeSaleCategorie1 = $homeSaleCategorie1[0];
        $homeSaleCategorie2 = $this->model_catalog_category->getHomeSaleCategorie('home2');
        $homeSaleCategorie2 = $homeSaleCategorie2[0];
        $homeSale1List = array();
        $homeSale2List = array();
//        var_dump($homeSaleCategorie1);exit;
//        var_dump($homeSaleCategorie1);exit;
        $home1descArray = explode("##", $homeSaleCategorie1['meta_keyword']);
        $home2descArray = explode("##", $homeSaleCategorie2['meta_keyword']);
        foreach($home1descArray as $k => $i) {
            $homeSale1List[$k] = $info = $this->model_catalog_product->getProductBySku($i);
            $homeSale1List[$k]['href'] = $this->url->link('product/product', 'product_id=' . $info['product_id']);
        }
        foreach($home2descArray as $i) {
            $homeSale2List[$k] = $info = $this->model_catalog_product->getProductBySku($i);
            $homeSale2List[$k]['href'] = $this->url->link('product/product', 'product_id=' . $info['product_id']);
        }
//        var_dump($homeSale1List);exit;
        $data['list1']['home_sale_product'] = $homeSale1List;
        $data['list1']['category'] = $homeSaleCategorie1;
        $data['list2']['category'] = $homeSaleCategorie2;
        $data['list2']['home_sale_product'] = $homeSale2List;
//        var_dump($data['list1']);exit;

		$this->response->setOutput($this->load->view('common/home', $data));
	}
}
