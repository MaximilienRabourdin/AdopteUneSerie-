<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* home/homelist.html.twig */
class __TwigTemplate_ff86330c6afcc9086b3e6131f2c60d966766b0d5927ad4146c1d68b61f45925a extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/homelist.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/homelist.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "home/homelist.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 2
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 3
        echo "\t
\t\t<h1>Hello ! ✅</h1>

\t\t<hr>
<table>
    <tbody>
        
            ";
        // line 10
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["seriesTrending"]) || array_key_exists("seriesTrending", $context) ? $context["seriesTrending"] : (function () { throw new RuntimeError('Variable "seriesTrending" does not exist.', 10, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["serie"]) {
            // line 11
            echo "                <tr>
                            <td><img src=\"https://image.tmdb.org/t/p/w500";
            // line 12
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "poster_path", [], "array", false, false, false, 12), "html", null, true);
            echo "\" alt=\"Card image cap\"></td>
                            <td><h5>";
            // line 13
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "name", [], "any", false, false, false, 13), "html", null, true);
            echo "</h5></td>
                            <td><p>";
            // line 14
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "overview", [], "any", false, false, false, 14), "html", null, true);
            echo "</p></td>
                            <td><small>Note : ";
            // line 15
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "vote_average", [], "array", false, false, false, 15), "html", null, true);
            echo "</small></td>
                </tr>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['serie'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["seriesRecent"]) || array_key_exists("seriesRecent", $context) ? $context["seriesRecent"] : (function () { throw new RuntimeError('Variable "seriesRecent" does not exist.', 18, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["serie"]) {
            // line 19
            echo "            
                <tr>
                            <td><img  src=\"https://image.tmdb.org/t/p/w500";
            // line 21
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "poster_path", [], "array", false, false, false, 21), "html", null, true);
            echo "\" alt=\"Card image cap\"></td>
                            <td><h5>";
            // line 22
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "name", [], "any", false, false, false, 22), "html", null, true);
            echo "</h5></td>
                            <td><p>";
            // line 23
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "overview", [], "any", false, false, false, 23), "html", null, true);
            echo "</p></td>
                            <td><small>Note : ";
            // line 24
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["serie"], "vote_average", [], "array", false, false, false, 24), "html", null, true);
            echo "</small></td>
                </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['serie'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 27
        echo "        
    </tbody>
</table>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "home/homelist.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  135 => 27,  126 => 24,  122 => 23,  118 => 22,  114 => 21,  110 => 19,  105 => 18,  96 => 15,  92 => 14,  88 => 13,  84 => 12,  81 => 11,  77 => 10,  68 => 3,  58 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends \"base.html.twig\" %}
{% block body %}
\t
\t\t<h1>Hello ! ✅</h1>

\t\t<hr>
<table>
    <tbody>
        
            {% for serie in seriesTrending %}
                <tr>
                            <td><img src=\"https://image.tmdb.org/t/p/w500{{serie[\"poster_path\"]}}\" alt=\"Card image cap\"></td>
                            <td><h5>{{ serie.name }}</h5></td>
                            <td><p>{{ serie.overview }}</p></td>
                            <td><small>Note : {{ serie[\"vote_average\"] }}</small></td>
                </tr>
            {% endfor %}
            {% for serie in seriesRecent %}
            
                <tr>
                            <td><img  src=\"https://image.tmdb.org/t/p/w500{{serie[\"poster_path\"]}}\" alt=\"Card image cap\"></td>
                            <td><h5>{{ serie.name }}</h5></td>
                            <td><p>{{ serie.overview }}</p></td>
                            <td><small>Note : {{ serie[\"vote_average\"] }}</small></td>
                </tr>
                {% endfor %}
        
    </tbody>
</table>
{% endblock %}
", "home/homelist.html.twig", "D:\\Program Files (x86)\\XAMPP\\htdocs\\Project\\projet-adopte-une-serie\\Back-end\\Symfony\\templates\\home\\homelist.html.twig");
    }
}
