package br.com.janes.ecommerce.cucumber.stepdefs;

import br.com.janes.ecommerce.EcommerceApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = EcommerceApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
