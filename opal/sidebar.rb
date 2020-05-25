class Sidebar
  def initialize
    @sidenav = Element.find('#subnav')
  end

  def setup
    add_carets(@sidenav)
    on_toggle_caret
    on_toggle_sidebar
    init_carets
    expand_to_current
    on_expand_all(@sidebar)
  end

  # Detects nested lists and only add carets as necessary
  #
  # before:
  #     <li><a>Docs</a></li>
  # after:
  #     <li><span class="caret caret-down"></span><a>Docs</a></li>
  #
  def add_carets(node)
    if node.tag_name == "li"
      if node.children("ul").size > 0
        node.prepend('<span class="caret caret-down"></span>')
      else
        node.prepend('<span class="caret caret-spacing"></span>')
      end
    end

    node.children.each do |child|
      add_carets(child)
    end
  end

  def on_toggle_caret
    @sidenav.on(:click) do |event|
      target = event.target
      caret = target.has_class?("caret-down") || target.has_class?("caret")
      if target.tag_name == "span" && caret
        target.toggleClass("caret-down")
        ul = target.siblings("ul")
        ul.toggle # hides or shows ul tag
      end
    end
  end

  def on_toggle_sidebar
    menu = Element.find('#menu-toggle')
    menu.on(:click) do |e|
      e.prevent_default
      sidebar = Element.find("#sidebar")
      sidebar.toggle_class("toggled") # slide out sidebar menu
      menu.toggle_class("cross") # change hamburger to cross
    end
  end

  # click on the all carets to initially close them
  def init_carets
    @sidenav.children.each do |child|
      next unless child.tag_name == "li"
      carets = child.find("span.caret")
      carets.click
    end
  end

  # Find current link associate with the currently viewed page,
  # then walk up the parents and show
  def expand_to_current
    current_location = $window.location.path # `window.location.pathname`

    links = @sidenav.find("a")
    current_link = links.select do |l|
      l.attr("href") == current_location
    end.first

    current_link.add_class("current-page")

    uls = current_link.parents("ul")
    uls.each do |ul|
      span = ul.prevAll("span").first
      span.click if span
    end
  end

  def on_expand_all
    expand_all = Element.find('#expand-all')
    @html = expand_all.html
    expand_all.on("click") do |e|
      @html = @html == "expand all" ? "collapse all" : "expand all"
      expand_all.html(@html)

      carets = @sidenav.find("span.caret")
      carets.each do |caret|
        if @html == "expand all"
          expand_carret(caret)
        else
          collapse_carret(caret)
        end
      end
    end
  end

  def expand_carret(caret)
    caret.removeClass("caret-down")
    caret.siblings("ul").hide
  end

  def collapse_carret(caret)
    caret.addClass("caret-down")
    caret.siblings("ul").show
  end
end
